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
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  // const categories = navigationLinks.map((e) => ({ name: e.name }))

  // const [currentCategory, setCurrentCategory] = useState('HOME');

  // const renderCategory = () => {
  //   if (currentCategory === 'HOME') {
  //     return (
  //       <>
  //         <Header />
  //         <Particles id='tsparticles' />
  //       </>
  //     );
  //   }
  //   if (currentCategory === 'ABOUT') {
  //     return <AboutMe />;
  //   }
  //   if (currentCategory === 'TECHNOLOGIES') {
  //     return <Technologies />;
  //   }
  //   if (currentCategory === 'PORTFOLIO') {
  //     return <Portfolio />;
  //   }
  //   return <ContactForm />;
  // };

  // handler takes a Category parameter and changes the current Category to this Category

  // const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Navigation
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {renderCategory()}
      <ContactMe
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      /> */}
        <NavigationBar />
        <Header />
        <Particles />
        <AboutMe />
        <Technologies />
        <Portfolio />
        <ContactForm />
        <Container></Container>
      </div>
      <Routes>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path="*" element={<Link to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
