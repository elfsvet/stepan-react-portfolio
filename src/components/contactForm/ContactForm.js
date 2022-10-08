import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import validateEmail from '../../helpers/validateEmail.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, Modal } from 'react-bootstrap';
import { BiMailSend, BiWinkSmile } from 'react-icons/bi';

const ContactForm = () => {
  const form = useRef();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  // console.log(formState);

  const [modalShow, setModalShow] = useState(false);

  const createModal = () => {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        arial-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            The message successfully sent{' '}
            <BiMailSend style={{ fontSize: '2rem', border: 'none' }} />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          I will get in touch with you shortly. Thank you.{' '}
          <BiWinkSmile style={{ fontSize: '1.5rem' }} />
        </Modal.Body>
      </Modal>
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // check email name message validity
    if (
      !validateEmail(email) ||
      !name ||
      !message ||
      name.length < 2 ||
      message.length < 2
    ) {
      setErrorMessage(
        'Email, name or message is missing. Fill these fields up and re-submit.'
      );
      // if it's not a valid should exit from the function
      return;
    }

    emailjs
      .sendForm(
        'service_xat53sf',
        'template_z8p9ju9',
        form.current,
        'sDWRZlVh3e8pCsepP'
      )
      .then(
        (result) => {
          e.target.reset();
          setEmail('');
          setName('');
          setMessage('');
          setErrorMessage('');
          setModalShow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id='contact__form__container' className='mainContainer'>
      <h1>Contact me</h1>
      <div>{createModal()}</div>
      <Row>
        <Col md={6} style={{paddingBottom:'2rem'}}>
          <Form id='contact__form' ref={form} onSubmit={handleFormSubmit}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Full Name'
                defaultValue={name}
                onChange={handleInputChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='name@example.com'
                defaultValue={email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as='textarea'
                name='message'
                rows={5}
                defaultValue={message}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant='dark' type='submit' style={{ width: '100%' }}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col as='div' className='error-checkbox' md={6}>
          <div>
            <p>
              Name should be at least 2 characters long{' '}
              {name.length > 1 ? '✅' : '🛑'}
            </p>
            <p>
              Have you provided your email? {validateEmail(email) ? '✅' : '🛑'}
            </p>
            <p>
              Message should have at least 2 characters{' '}
              {message.length > 1 ? '✅' : '🛑'}
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <p className='error-text'>{errorMessage}</p>
      </Row>
    </Container>
  );
};

export default ContactForm;
