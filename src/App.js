import './App.css';
import React, { useState } from 'react';
import Navigation from './components/NavigationBar/NavigationBar';
import Particles from './components/Particles';
import TypeString from './components/TypeString/TypeString';
import AboutMe from './components/AboutMe/AboutMe';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <NavigationBar />
        <div id='appContent'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <TypeString />
                  <Particles />
                </>
              }
            />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/technologies' element={<Technologies />} />
            <Route path='/contacts' element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
