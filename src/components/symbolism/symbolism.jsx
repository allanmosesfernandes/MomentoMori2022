import React from 'react';
import './symbolism.scss';
import Skull from '../../assets/images/symbols/skull__svg.svg'
import HourGlass from '../../assets/images/symbols/hourglass__svg.svg'
import Stoic from '../../assets/images/symbols/stoic-person.svg'

const Symbolism = () => {
  return (
    <div className='quote-container symbolism'>
        <div className="symbols-grid">
            <div className="symbols-icons skull">
                <img src={Skull} alt="skull icon" />
                <p>Mortality</p>

            </div>

            <div className="symbols-icons hourglass">
                <img src={HourGlass} alt="Hourglass icon" />
                <p>Time</p>
            </div>
            
            <div className="symbols-icons book">
                <img src={Stoic} alt="Book icon" />
                <p>Wisdom</p>
            </div>
        </div>
    </div>
  )
}

export default Symbolism