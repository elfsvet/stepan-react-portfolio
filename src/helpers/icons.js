import React from 'react';
import { IconContext } from 'react-icons';

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';

export const linkedIn = (
  <IconContext.Provider value={{ size: '2rem' }}>
    <div>
      <AiFillLinkedin />
    </div>
  </IconContext.Provider>
);

export const gitHub = (
  <IconContext.Provider value={{ size: '2rem' }}>
    <div>
      <AiFillGithub />
    </div>
  </IconContext.Provider>
);

export const email = (
  <IconContext.Provider value={{ size: '2rem' }}>
    <div>
      <AiOutlineMail />
    </div>
  </IconContext.Provider>
);
