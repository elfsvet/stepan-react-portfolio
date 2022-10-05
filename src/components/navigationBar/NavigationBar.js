import React, { useEffect } from 'react';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks';
import { Link } from 'react-router-dom';
const createLinks = (handle) => {
  return navigationLinks.map((e, index) => (
    <Nav.Item key={index}>
      <Nav.Link onClick={() => handle(e.name)} href={e.ref}>
        {e.name}
      </Nav.Link>
    </Nav.Item>
  ));
};

const NavigationBar = () => {
  return (
    <div id='home'>
      <Navbar
        className='navigation-container'
        collapseOnSelect
        expand='md'
        style={{ zIndex: 2 }}
      >
        <Navbar.Brand style={{ marginLeft: '1rem' }} as={Link} to='/'>
          Stepan Matysik
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          style={{
            justifyContent: 'flex-end',
            marginRight: '1rem',
            borderColor: 'none',
          }}
        >
          <Nav className='links' style={{ margin: '0 1rem' }}>
            {/* {createLinks()} */}
            <Nav.Item>
              <Nav.Link as={Link} to='/about'>
                ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/technologies'}>
                TECHNOLOGIES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/portfolio'}>
                PORTFOLIO
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={'/contacts'}>
                CONTACTS
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
