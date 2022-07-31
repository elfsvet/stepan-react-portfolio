import React from 'react';
import './Technologies.css';
import { techs } from '../../helpers/techs';
import { IconContext } from "react-icons";
import { } from '../../helpers/icons';

const technologies = techs.map(tech => ({ icon: tech.reactIcon }))
console.log(technologies)
function Technologies() {



    return (

        <div className='technologies__container' >
            <div>
                <h1 style={{ textAlign: 'center' }}>Some of the technologies I use:</h1>

            </div>
            <div className='tech__cards__container'>

                {techs.map((elem, index) => {

                    // console.log(elem.reactIcon)
                    return (
                        <div key={index} className="tech__card">
                            < IconContext.Provider value={{ size: "4rem",className: "tech__icons" }}>
                                <div>
                                    
                                        <elem.reactIcon/>
                                    
                                </div>
                            </ IconContext.Provider>
                            {/* <DevIcon className="tech__icons" icon={elem.iconName} /> */}
                            <span style={{ margin: '5px', fontSize: '1.5rem' }}>{elem.name}</span>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default Technologies