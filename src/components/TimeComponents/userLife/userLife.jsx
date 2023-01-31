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
    event.target.showPicker();
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
      <div className="user-date-container">
        <span> BIRTHDAY</span>
        <input 
         type="date" 
         placeholder='YYYY / MM / DD'
         onChange={userBirthInput}
         onClick={openDatePicker}
         max={dateValidation}
         />

        </div>
        {/* When user inputs his DOB display block */}
         {
    Object.keys(userBirthDate).length !== 0 ? (
       (
        
        <div className='user-life-card'>
            <div className="img-block">
             <img src={Skull} alt="user skull" className='user-life-skull'/>
              <div className="skully-text">
              <p>Your Life,</p>
              <p>{`${CalendarMonths[birthMonth - 1]} ${birthDate},${birthYear}`}</p>
              </div>
            </div>

            <div className="user-age">
              <p><strong>{years}</strong></p>
              <p>
                Years old
              </p>
            </div>

            <div className="img-block">
              <FontAwesomeIcon icon={faHourglass} className="user-life-skull hour-glass"/>
               <div className="skully-text">
                <p><strong>{totaldays}</strong> Days </p> 
               </div>
            </div>

            <div className="user-age">
              <p><strong>{totalMonths}</strong></p>
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