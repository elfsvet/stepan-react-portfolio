import React from 'react'
import './AboutMe.css'
import stepan from '../../images/stepan.jpg'

function AboutMe() {
  return (
    <div className='about__container'>
      <h1>About Me</h1>
      <div className='about__container__photo__text'>
        <div>
          <img src={stepan} alt=" stepan photo" />
        </div>
        <div className='about__text'>
          <p>Full-stack web developer leveraging psychology background to build a more intuitive user
            experience on the web. Recently earned a certificate in full-stack development from the
            Miami University Coding Boot Camp, with skills in JavaScript, CSS, React.js, Node.js, and responsive web
            design. Known as an innovative problem solver passionate about developing apps, with a focus
            on mobile-first design and development. Using excellent communication skills with the team,we were able to create a functional and responsive project, which is a joy to use. With each project, my aim is to best engage the target audience for an impactful user experience. Applied aspects of UX and agile development in a
            recent project. Worked on a team of four to develop a single-page app that helps people to create craft drinks and locate the closest to them liquor stores to buy ingredients. Excited to
            leverage the skills as part of a fast-paced, quality-driven team to build better experiences on the
            web.

          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutMe