import React from 'react';
import './Technologies.css';
import { techs } from '../../helpers/techs';
import { IconContext } from 'react-icons';

function Technologies() {
  return (
    <div className='technologies__container text-white'>
    <h1>Technologies</h1>
      <div>
        <h1 style={{ textAlign: 'center' }}>Some of the technologies I use:</h1>
      </div>
      <div className='tech__cards__container'>
        {techs.map((elem, index) => {
          return (
            <div key={index} className='tech__card'>
              <IconContext.Provider
                value={{ size: '4rem', className: 'tech__icons' }}
              >
                <div>
                  <elem.reactIcon />
                </div>
              </IconContext.Provider>
              <span style={{ margin: '5px', fontSize: '1.5rem' }}>
                {elem.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
