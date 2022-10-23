import React from 'react';
import './AboutMe.css';
import stepan from '../../images/stepan.jpg';

function AboutMe() {
  return (
    <div className='mainContainer'>
      <h1>About Me</h1>
      <div className='about__container__photo__text'>
        <div>
          <img src={stepan} alt=' stepan photo' />
        </div>
        <div className='about__text'>
          <p>
            Enthusiastic Full Stack Web Developer with a positive attitude and
            motivated to create organized, clean code and responsive,
            user-friendly applications. Received a certificate in Full stack web
            development from the University of Miami and constantly looking at
            next technological innovation.
          </p>
          <p>
            Versatile self-motivated, team player with proven success in
            customer service, with flexibility to work in a fast paced
            environment and cross-team collaboration.
          </p>
          <p>
            Proficient in the MERN Stack; flexible, fast learner bringing
            attention to details and passion to every project. Effective at
            combining creativity and problem solving to develop innovative
            applications prior to tight deadlines.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
