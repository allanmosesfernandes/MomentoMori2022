import React from 'react'
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      <p className="month__name">{monthName}</p>
        <div className='circular__donut__sizing'>
         <CircularProgressbar 
            value={todaysDate} 
            text={`${MonthPercent}%`}
            maxValue={totalDays} 
            strokeWidth={15}
            styles={buildStyles({
                strokeLinecap: 'round',
                textSize: '20px',
                pathTransitionDuration: 0.5,
                pathColor: "#ff2b00",
                textColor: '#fff',
                trailColor: '#9e9e9e',
                backgroundColor: '#3e98c7'
        })}
        />
        </div>

        <p className='today__time--container-hour'>
          {todaysDate} / {totalDays} days.
        </p>
        {/* <p className='month__name'>
          {MonthPercent}<span className='no-stylist'> %</span>
        </p> */}

      </div>

       
    </div>
  )
}

export default Month