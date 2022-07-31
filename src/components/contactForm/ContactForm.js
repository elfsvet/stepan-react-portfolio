import React, { useState } from 'react';
import validateEmail from '../../helpers/validateEmail.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';
import Container from 'react-bootstrap/Container';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter.js';

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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
            if (!e.target.value.length) {
                setErrorMessage(`${(capitalizeFirstLetter(e.target.name))} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };
    console.log(formState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };


    return (
        <div className='contact__main__container'>

            <Container id="contact__form__container" >
                <h1>Contact me</h1>

                <Form onSubmit={handleSubmit} id="contact__form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                        {/* name input */}

                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="name"
                            name='name'
                            placeholder="Full name"
                            defaultValue={name} onBlur={handleChange}
                        />
                    </Form.Group>

                    {/* email input */}

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="name@example.com"
                            defaultValue={email} onBlur={handleChange}
                        />
                    </Form.Group>

                    {/* message text area */}

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            defaultValue={message} onBlur={handleChange}
                        />
                    </Form.Group>
                </Form>

                {/* this is refers as if(errorMessage){add div and p tags with info} */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <Button
                    variant="primary"
                    type="submit"
                    data-testid='button'>Submit</Button>

            </Container>
        </div>
    )
}

export default ContactForm;