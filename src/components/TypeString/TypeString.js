import React from 'react';
import Typewriter from 'typewriter-effect';
import './TypeString.css';
function TypeString() {
  return (
    <div className='main-info'>
      <Typewriter
        options={{
          strings: [
            
            'A Full stack developer',
            'Also known as a',
            'Software Engineer',
            'Back-end developer',
            'Front-end developer',
            'Or!',
            'a coder',
            '',
          ],
          deleteSpeed: 2,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default TypeString;
