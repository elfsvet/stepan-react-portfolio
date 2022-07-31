import React from 'react'
import Typewriter from 'typewriter-effect';
import './Header.css'
function Header() {
  return (
    <div className="main-info">
      <Typewriter
        options={{
          strings: ['','A Software Engineer', 'Also known as an', 'Front-end developer', 'Back-end developer', 'Full stack developer', 'Or!', 'a coder',''],
          deleteSpeed: 2,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default Header

