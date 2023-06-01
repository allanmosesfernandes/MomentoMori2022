import React, { useState } from 'react'
import './today.styles.scss'
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const TodayTimeBlock = () => {

const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const percentage = ((currentHour * 60 + currentMinute) / 24 / 60 * 100).toFixed(1);
return (
    <div className='today__time--container'>
    <p className='today__time--container-header'>Today</p>

        <div className="arrow circular__donut__sizing">
         <CircularProgressbar 
            text={`${percentage}%`}
            value={currentHour} 
            maxValue={24} 
            strokeWidth={15}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: '18px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#ff2b00",
                trailColor: '#9e9e9e',
                backgroundColor: '#3e98c7'
        })}
        
        />
        </div>

        <p className='today__time--container-hour'>{ `${currentHour} / 24 hours`} </p>
        {/* <p className='today__time--container-header '>{percentage}&nbsp;<span className='no-stylist'>%</span></p> */}
    </div>
  )
}

export default TodayTimeBlock
// #7C7C7D