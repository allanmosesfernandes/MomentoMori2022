import React from 'react';
import { useState } from 'react';
import './user-life.styles.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserLife = () => {

      const [userBirthDate, setUserBirthDate] = useState({});

    const userBirthInput = (event) => {
        let userBirthDate = event.target.value;

        let userYear = Number(userBirthDate.split("-")[0]);
        let userMonth = Number(userBirthDate.split("-")[1]);
        let userDay = Number(userBirthDate.split("-")[2]);
        let userBirthTime = new Date(`${userYear},${userMonth},${userDay}`);
        
        //===Current Day ===//
        let currentDayinMilliSeconds = new Date();
        let differenceInMilliSeconds = currentDayinMilliSeconds - userBirthTime;
        let differenceInSeconds = Math.floor(differenceInMilliSeconds / 1000);
        let differenceInMinutes = Math.floor(differenceInSeconds / 60);
        let differenceInHours = Math.floor(differenceInMinutes / 60);
        let differenceInDays = Math.floor(differenceInHours / 24);
        let differenceInMonths = Math.floor(differenceInDays / 30.44);
        let differenceInYears = Math.floor(differenceInMonths / 12);

        setUserBirthDate({
          years: differenceInYears,
          months: differenceInMonths,
          days: differenceInDays
        })
    }
  return (
    <div className='quote-container user-life-component'>
      <div className="user-date-container">
         <input 
         type="date" 
         placeholder='YYYY / MM / DD'
         onChange={userBirthInput}/>
      </div>
      
    </div>
  )
}

export default UserLife;