import React, { useState, useEffect } from "react";
import "./today.styles.scss";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TodayTimeBlock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const percentage = (
    ((currentHour * 60 + currentMinute) / 24 / 60) *
    100
  ).toFixed(1);

  return (
    <div className="today__time--container">
      <p className="today__time--container-header">Today</p>

      <div className="arrow circular__donut__sizing">
        <CircularProgressbar
          text={`${percentage}%`}
          value={currentHour}
          maxValue={24}
          strokeWidth={15}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "18px",
            pathTransitionDuration: 0.5,
            pathColor: "#ff2b00",
            trailColor: "#9e9e9e",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>

      <p className="today__time--container-hour">{`${currentHour} / 24 hours`}</p>
    </div>
  );
};

export default TodayTimeBlock;
