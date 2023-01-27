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

const currentHour = new Date().getHours();
const percentage = Math.floor((currentHour * 100) / 24);

return (
    <div className='today__time--container'>
        <div style={{ width: 100, height: 100 }}>
         <CircularProgressbar 
          
            value={currentHour} 
            maxValue={24} 
            strokeWidth={15}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#F7F02B",
                textColor: '#fff',
                trailColor: '#fff',
                backgroundColor: '#3e98c7'
        })}
        />
        </div>

        <p className='today__time--container-header'>Today</p>
        <p className='today__time--container-hour'>{ `${currentHour} / 24 h Passed`} </p>
        <p className='today__time--container-header '>{percentage}&nbsp;<span className='no-stylist'>%</span></p>
    </div>
  )
}

export default TodayTimeBlock
// #7C7C7D