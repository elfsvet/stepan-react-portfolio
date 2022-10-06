import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import validateEmail from '../../helpers/validateEmail.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';
import Container from 'react-bootstrap/Container';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter.js';
import { Row } from 'react-bootstrap';
// import { text } from 'express'

// import express from 'express'

const ContactForm = () => {
  const form = useRef();
  //   error is not empty on initial state for not letting to send empty form
  const [errorMessage, setErrorMessage] = useState(' ');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  // JSX
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (e.target.value.length < 2) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  // console.log(formState);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !errorMessage &&
      email.length > 0 &&
      name.length > 0 &&
      message.length > 0
    ) {
      emailjs
        .sendForm(
          'service_xat53sf',
          'template_z8p9ju9',
          form.current,
          'sDWRZlVh3e8pCsepP'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log('Message sent');
            e.target.reset();
            setFormState({ ...formState, name: '', email: '', message: '' });
            // update in the future for a nice message
            alert('Message sent successfully');
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container id='contact__form__container'>
      <h1>Contact me</h1>

      <Form id='contact__form' ref={form} onSubmit={sendEmail}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder='Full Name'
            defaultValue={name}
            onBlur={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='name@example.com'
            defaultValue={email}
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as='textarea'
            name='message'
            rows={5}
            defaultValue={message}
            onBlur={handleChange}
          />
        </Form.Group>
        <Row>
          {/* this is refers as if(errorMessage){add div and p tags with info} */}
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
          <Button variant='dark' type='submit'>
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
