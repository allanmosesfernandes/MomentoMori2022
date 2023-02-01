import React from 'react';
import { useState } from 'react';
import './user-life.styles.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import Skull from '../../../assets/images/skull-white.svg';
import AgeCalculator from '../iOsTest';

const UserLife = () => {


    const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  function calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    setAge({
      years: Math.abs(ageDate.getUTCFullYear() - 1970),
      months: Math.abs(ageDate.getUTCMonth()),
      days: Math.abs(ageDate.getUTCDate() - 1)
    });
  }
    const openDatePicker = (event) => {
      const native = document.getElementById("native-date-picker");
      native.showPicker();
    // event.target.showPicker();
};

    const { years, months, days} = age;

      const CalendarMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  return (
    <div className='quote-container user-life-component'>
      <div className="user-date-container" onClick={openDatePicker}>
        <span>ENTER YOUR DATE OF BIRTH</span>
        <input 
        id="native-date-picker"
        type="date"
        placeholder="YYYY / MM / DD"
        onChange={e => calculateAge(new Date(e.target.value))}
        required
         />

        </div>
  

        
        <div className='user-life-card'>
            <div className="img-block">
             <img src={Skull} alt="user skull" className='user-life-skull'/>
              <div className="skully-text">
              <p className='pseudo-border'>Your Life,</p>
              <p className='large-txt'>
                {/* {`${CalendarMonths[birthMonth - 1]} ${birthDate},${birthYear}`} */}
              </p>
              </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{ years }</p>
              <p>
                Years old
              </p>
            </div>

            <div className="img-block">
              <lottie-player className="lottie-animation" src="https://assets10.lottiefiles.com/packages/lf20_kw3ernmh.json"  background="transparent"  speed="0.5"  loop  autoplay></lottie-player>
              {/* <FontAwesomeIcon icon={faHourglass} className="user-life-skull hour-glass"/> */}
               <div className="skully-text inline">
                <p className='large-txt'>{days + months * 30 + years * 365} </p>
                <p>Days </p> 
               </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{months + years * 12}</p>
              <p> Months </p>
            </div>
          </div>
    </div>
  )
}

export default UserLife;