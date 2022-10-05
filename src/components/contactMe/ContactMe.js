import React from 'react';
import './ContactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks';
import { gitHub, linkedIn, email } from '../../helpers/icons';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap'

const createLinks = (handle) => {
  return navigationLinks.map((e, index) => (
    <Nav.Item key={index}>
      <Nav.Link onClick={() => handle(e.name)} href={e.ref}>
        {e.name}
      </Nav.Link>
    </Nav.Item>
  ));
};

function ContactMe({ currentCategory, handleCategoryChange }) {
  return (
    <div className='contactMe__container' id='contact'>
      <div className='contactMe__data__links'>
        <div>
          <p>Fort Lauderdale, FL</p>
          <p>Stepan Matysik</p>
          <Row>
            <Col>
              <a href='mailto:stepanmatysik@gmail.com'>{email}</a>
            </Col>
            <Col>
              <a
                href='https://github.com/elfsvet'
                target='_blank'
                rel='noreferrer'
              >
                {gitHub}
              </a>
            </Col>
            <Col>
              <a
                href='https://www.linkedin.com/in/stepanmatysik/'
                target='_blank'
                rel='noreferrer'
              >
                {linkedIn}
              </a>
            </Col>
          </Row>
        </div>
        <div>{createLinks(handleCategoryChange)}</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default ContactMe;
