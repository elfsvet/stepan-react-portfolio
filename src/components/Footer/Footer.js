import React from 'react';
import './Footer.css';
import { navigationLinks } from '../../helpers/navigationLinks';
import { gitHub, linkedIn, email } from '../../helpers/icons';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const createLinks = () => {
  return navigationLinks.map((e, index) => (
    <Nav.Item key={index}>
      <Nav.Link as={Link} to={e.link}>
        {e.name}
      </Nav.Link>
    </Nav.Item>
  ));
};

function Footer() {
  return (
    <div className='contactMe__container' id='contact' style={{ zIndex: 1 }}>
      <div className='contactMe__data__links'>
        <div>
          <p>Miami and Fort Lauderdale area, Florida</p>
          <p>Stepan Matysik</p>
          <Row>
            <Col>
              <a href='mailto:stmatysik@gmail.com'>{email}</a>
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
                href='https://www.linkedin.com/in/stepan-matysik-b9b272252'
                target='_blank'
                rel='noreferrer'
              >
                {linkedIn}
              </a>
            </Col>
          </Row>
        </div>
        <div>{createLinks()}</div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        Copyright&copy; {new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}

export default Footer;
