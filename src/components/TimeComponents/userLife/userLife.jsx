import React from 'react';
import { useState } from 'react';
import './user-life.styles.scss';

const UserLife = () => {

    const [birthDate, setBirthdate] = useState(0);
    const setBirthDate = (event) => {
        let userBirthDate = event.target.value;
        setBirthDate(userBirthDate);
    }
  return (
    <div className='quote-container user-life-component'>
        <div className="user-profile"></div>
        <form action="">
            <input type="date" placeholder="Enter Date of Birth"  onChange={setBirthDate}/>

        </form>
        
    </div>
  )
}

export default UserLife;