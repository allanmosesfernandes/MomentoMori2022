import React from 'react'
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
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
const monthName = CalendarMonths[currentMonth];
const todaysDate = currentDate.getDate();
const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
const MonthPercent = Math.floor((todaysDate * 100) / totalDays);

const Month = () => {
  return (
    <div className='month-block-container'>
      <div className="month-block-left">
        <div style={{ width: 200, height: 200 }}>
         <CircularProgressbar 
            value={todaysDate} 
            maxValue={totalDays} 
            strokeWidth={15}
            styles={buildStyles({
                strokeLinecap: 'round',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: "#fff",
                textColor: '#C1C1C1',
                trailColor: '#45A4AB',
        })}
        />
        </div>
        <p className="month__name">{monthName}</p>
        <p className='today__time--container-hour'>
          {todaysDate}/{totalDays} . Passed
        </p>
        <p className='month__name'>
          {MonthPercent}<span className='no-stylist'> %</span>
        </p>

      </div>
        {/* <div className="month-block-right">
          <Calendar />
        </div> */}
       
    </div>
  )
}

export default Month