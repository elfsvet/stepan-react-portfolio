import './App.css';
import React, { useState } from 'react';
import Navigation from './components/NavigationBar/NavigationBar';
import Particles from './components/Particles';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import ContactForm from './components/ContactForm/ContactForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  // const categories = navigationLinks.map((e) => ({ name: e.name }))

  const [currentCategory, setCurrentCategory] = useState('HOME');

  const renderCategory = () => {
    if (currentCategory === 'HOME') {
      return (
        <>
          <Header />
          <Particles id='tsparticles' />
        </>
      );
    }
    if (currentCategory === 'ABOUT') {
      return <AboutMe />;
    }
    if (currentCategory === 'TECHNOLOGIES') {
      return <Technologies />;
    }
    if (currentCategory === 'PORTFOLIO') {
      return <Portfolio />;
    }
    return <ContactForm />;
  };

  // handler takes a Category parameter and changes the current Category to this Category

  const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <div className='App'>
      <Navigation
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {renderCategory()}
      <ContactMe
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
