import React from 'react'
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const YearProgress = () => {

//=== Get first day of the current year ===//
let dateObj = new Date();
let currentYear = dateObj.getFullYear();
let firstDayOfCurrentYearinMS = new Date(`${currentYear}-01-01`);

//===Current Day ===//
let currentDayinMilliSeconds = new Date();
let differenceInMilliSeconds = currentDayinMilliSeconds - firstDayOfCurrentYearinMS;
let daysPassed = Math.floor(differenceInMilliSeconds / (1000 * 60 * 60 * 24));

//=== Total Days in the current Year ===//
let lastDayOfCurrentYear = new Date(currentYear, 11,31);
let totalDays = (lastDayOfCurrentYear.getTime() - firstDayOfCurrentYearinMS.getTime()) / (1000 * 60 * 60 * 24) + 1;

//=== year percent ===//
let yearPercent = Math.round((daysPassed * 100) / totalDays)

  return (
    <div className='year-block-container'>
    <div style={{ width: 100, height: 100, margin: "auto" }}>
        <CircularProgressbar 
            value={daysPassed} 
            maxValue={totalDays} 
            strokeWidth={15}
            styles={buildStyles({
                strokeLinecap: 'round',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                pathColor: "#3e98c7",
                textColor: '#C1C1C1',
                trailColor: '#f2f2f2'
                })}
        />
    </div>  
    <p className='month__name progress'>{currentYear} Progress</p>
    <p className='today__time--container-hour'>
          {daysPassed} days / {totalDays} days
          <span className='middle-dot'>.</span> Passed
    </p>
    <p className='month__name'>
          {yearPercent}<span className='no-stylist'> %</span>
    </p>
    </div>
  )
}

export default YearProgress