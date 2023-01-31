import React from 'react';
import { useState } from 'react';
import './user-life.styles.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import Skull from '../../../assets/images/skull-white.svg';

const UserLife = () => {

    const [userBirthDate, setUserBirthDate] = useState({});

    const openDatePicker = (event) => {
      const native = document.getElementById("native-date-picker");
      native.showPicker();
    // event.target.showPicker();
};

    console.log(userBirthDate);
        const dateValidation = new Date().toISOString().split('T')[0]; 

    const userBirthInput = (event) => {
        let userBirthDate = event.target.value;
        let userYear = Number(userBirthDate.split("-")[0]);
        let userMonth = Number(userBirthDate.split("-")[1]);
        let userDay = Number(userBirthDate.split("-")[2]);
        let userBirthTime = new Date(`${userYear},${userMonth},${userDay}`);
        let monthName = userBirthTime.toDateString().split(" ")[1];

        //===Current Day ===//
        let currentDayinMilliSeconds = new Date();
        let differenceInMilliSeconds = currentDayinMilliSeconds - userBirthTime;
        let differenceInSeconds = Math.floor(differenceInMilliSeconds / 1000);
        let differenceInMinutes = Math.floor(differenceInSeconds / 60);
        let differenceInHours = Math.floor(differenceInMinutes / 60);
        let differenceInDays = Math.floor(differenceInHours / 24);
        let differenceInMonths = Math.floor(differenceInDays / 30.44);
        let differenceInYears = (differenceInMonths / 12).toFixed(2);


        setUserBirthDate({
          years: differenceInYears,
          months: Math.floor(differenceInMonths % 12),
          days: Math.floor(differenceInDays % 30.44),
          totaldays: differenceInDays,
          totalMonths: differenceInMonths,
          birthYear: userYear,
          birthMonth: userMonth,
          birthDate: userDay
        })
    }
    const { years, months, days,totaldays,totalMonths, birthYear, birthMonth,birthDate } = userBirthDate;
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
         placeholder='YYYY / MM / DD'
         onChange={userBirthInput}
         onClick={openDatePicker}
         max={dateValidation}
         required
         />

        </div>
        {/* When user inputs his DOB display block */}
         {
        (Object.keys(userBirthDate).length !== 0) && (userBirthDate.years !== "NaN") ? (
       (
        
        <div className='user-life-card'>
            <div className="img-block">
             <img src={Skull} alt="user skull" className='user-life-skull'/>
              <div className="skully-text">
              <p className='pseudo-border'>Your Life,</p>
              <p className='large-txt'>{`${CalendarMonths[birthMonth - 1]} ${birthDate},${birthYear}`}</p>
              </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{years}</p>
              <p>
                Years old
              </p>
            </div>

            <div className="img-block">
              <lottie-player className="lottie-animation" src="https://assets10.lottiefiles.com/packages/lf20_kw3ernmh.json"  background="transparent"  speed="0.5"  loop  autoplay></lottie-player>
              {/* <FontAwesomeIcon icon={faHourglass} className="user-life-skull hour-glass"/> */}
               <div className="skully-text inline">
                <p className='large-txt'>{totaldays} </p>
                <p>Days </p> 
               </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{totalMonths}</p>
              <p> Months </p>
            </div>
          </div>
          
      )
    ) : null
  }

      
    </div>
  )
}

export default UserLife;