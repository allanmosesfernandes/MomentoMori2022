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
console.log(currentDate);
const monthName = CalendarMonths[currentMonth];
console.log(monthName)
const todaysDate = currentDate.getDate();
const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();
const MonthPercent = Math.floor((todaysDate * 100) / totalDays);

const Month = () => {
  return (
    <div className='month-block-container'>
      <div className="month-block-left">
        <div style={{ width: 100, height: 100 }}>
         <CircularProgressbar 
            counterClockwise
            value={todaysDate} 
            maxValue={totalDays} 
            strokeWidth={15}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#fff",
                textColor: '#C1C1C1',
                trailColor: '#45A4AB',
        })}
        />
        </div>
        <p className="month__name">{monthName}</p>
        <p>
          {todaysDate}/{totalDays} . Passed
        </p>
        <p>
          {MonthPercent} %
        </p>
        <div className="month-block-right">
          <Calendar />
        </div>
      </div>

       
    </div>
  )
}

export default Month