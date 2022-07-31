
import './App.css';
import React, { useCallback, useState, useEffect } from 'react';
import Navigation from './components/navigationBar/NavigationBar'
import Particles from "./components/Particles";
import Header from './components/header/Header'
import AboutMe from './components/aboutMe/AboutMe';
import Technologies from './components/technologies/Technologies';
import Portfolio from './components/portfolio/Portfolio';
import ContactMe from './components/contactMe/ContactMe';
import ContactForm from './components/contactForm/ContactForm';
import { navigationLinks } from './helpers/navigationLinks';

function App() {

  const categories = navigationLinks.map((e) => ({ name: e.name }))


  // console.log(categories)
  // const categories = [{ name: 'HOME' }]
  const [currentCategory, setCurrentCategory] = useState("HOME");


  
  const renderCategory = () => {
    if (currentCategory === 'HOME') {

      return <>
        <Header />
        <Particles id='tsparticles' />
      </>
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
      // useEffect(() => {
    //     console.log(currentCategory)
    //     document.title = currentCategory
    // }, [currentCategory]);
    //  useEffect(() =>{
    //  },[currentCategory])

  // handler takes a Category parameter and changes the current Category to this Category

  const handleCategoryChange = (category) => setCurrentCategory(category);

  return (
    <div className="App">
      <Navigation
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {renderCategory()}
      <ContactMe
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
