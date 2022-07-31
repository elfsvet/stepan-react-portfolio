import React from 'react';
import './ContactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks'
import { gitHub, linkedIn, email } from '../../helpers/icons';
import Nav from 'react-bootstrap/Nav';

const createLinks = (handle) => {
    return navigationLinks.map((e, index) => (
        <Nav.Item>

            <Nav.Link
                key={index}
                onClick={() => handle(e.name)}
                href={e.ref}
            >
                {e.name}
            </Nav.Link>
        </Nav.Item>

    ))
}


function ContactMe({currentCategory, handleCategoryChange}) {
    return (
        <div className="contactMe__container" id="contact">
            <div className='contactMe__data__links'>
                <div>
                    <p>Fort Lauderdale, FL</p>
                    <p>Stepan Matysik</p>
                    <ul>
                        <li>

                            <a href='mailto:stepanmatysik@gmail.com'>{email}</a>

                        </li>
                        <li>

                            <a href='https://github.com/elfsvet' target='_blank' rel='noreferrer'>{gitHub}</a>

                        </li>
                        <li>

                            <a href='https://www.linkedin.com/in/stepanmatysik/' target='_blank' rel='noreferrer'>{linkedIn}</a>

                        </li>
                    </ul>
                </div>
                <div>
                    {createLinks(handleCategoryChange)}
                    {/* <ul>
                        <li onClick={() => handleCategoryChange('HOME')}
                            href={"#home"}>
                            HOME
                        </li>
                        <li onClick={() => handleCategoryChange('ABOUT')}
                            href={"#about"}
                        >
                            ABOUT
                        </li>
                        <li 
                        // onClick={() => handleCategoryChange('TECHNOLOGIES')}
                            href={"#technologies"}
                        >
                            TECHNOLOGIES

                        </li>
                        <li
                        //  onClick={() => handleCategoryChange('PORTFOLIO')}
                            href={"#portfolio"}
                        >
                            PORTFOLIO
                        </li>
                        <li onClick={() => handleCategoryChange('CONTACT')}
                            href={"#contact"}
                        >
                            CONTACT

                        </li>
                    </ul> */}



                    {/* <Nav>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('HOME')}
                                href={"#home"}
                            >
                                HOME
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('ABOUT')}
                                href={"#about"}
                            >
                                ABOUT
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('TECHNOLOGIES')}
                                href={"#technologies"}
                            >
                                TECHNOLOGIES
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('PORTFOLIO')}
                                href={"#portfolio"}
                            >
                                PORTFOLIO
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('CONTACT')}
                                href={"#contact"}
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav.Item>
                    </Nav> */}

                    
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}

export default ContactMe
