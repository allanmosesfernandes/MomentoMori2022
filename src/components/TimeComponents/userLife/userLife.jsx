import React from 'react';
import { useState, useEffect } from 'react';
import './user-life.styles.scss';
import Skull from '../../../assets/images/skull-white.svg';
import Leafy from '../../../assets/images/symbols/Leaf.svg';
import MonthVase from '../../../assets/images/symbols/month_vase.svg';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const UserLife = () => {

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

    const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    userYear: 0,
    userMonth: 0,
    userDay: 0,
  });

  useEffect(() => {
  const ageFromLocalStorage = window.localStorage.getItem('age');
  const theme = window.localStorage.getItem("themeSwitch");

  if (ageFromLocalStorage) {
    setAge(JSON.parse(ageFromLocalStorage));
  }
    const fakeCheckbox = document.getElementById("fake");
    const themeSwitch = document.getElementById("theme-switch");

  fakeCheckbox.checked = (theme === 'true');
  themeSwitch.checked = (theme === 'true');

  }, []);


  function calculateAge(birthday) {
    let birthDayString = birthday.toISOString();
    console.log(birthDayString);
    let userYear = birthDayString.split("-")[0];
    let userMonth = Number(birthDayString.split("-")[1]);
    let userDay = birthday.getDate();
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    let userLifeLeft = 0;

    const updatedAge = {
    years: Math.abs(ageDate.getUTCFullYear() - 1970),
    months: Math.abs(ageDate.getUTCMonth()),
    days: Math.abs(ageDate.getUTCDate() - 1),
    userYear,
    userMonth: userMonth,
    userDay: userDay,
    lifeLeft: Math.abs(ageDate.getUTCFullYear() - 1970) - 80,
  };
  

    setAge(updatedAge);
  window.localStorage.setItem('age', JSON.stringify(updatedAge));
  }
    const openDatePicker = (event) => {
      const native = document.getElementById("native-date-picker");
      native.showPicker();
    // event.target.showPicker();
};

    const { years, months, days,userMonth, userDay, userYear} = age;
  

  return (
    <div className='quote-container user-life-component'>
      <div className="user-date-container" onClick={openDatePicker}>
        <p>ENTER YOUR DATE OF BIRTH</p>
        <input 
        id="native-date-picker"
        type="date"
        placeholder="YYYY / MM / DD"
        onChange={e => calculateAge(new Date(e.target.value))}
        required
        value={`${userYear}-${userMonth < 10 ? '0' + userMonth : userMonth}-${userDay < 10 ? '0' + userDay : userDay}`}
         />
        <p>*Based on the <a href="https://ourworldindata.org/life-expectancy">average lifespan </a>of 75 years</p>
        </div>

        <div className='user-life-card'>
            <div className="img-block">
             <img src={Skull} alt="user skull" className='user-life-skull'/>
              <div className="skully-text">
              <p className='large-txt'>
                { userMonth === undefined || userMonth === 0 ? '????' : `${CalendarMonths[userMonth - 1 ]} ${userDay}, ${age.userYear}` }
              </p>
              <p className='pseudo-border'>Your Life.</p>

              </div>
            </div>
            <div className="img-block">

        <div className="arrow circular__donut__sizing__mini">
         <CircularProgressbar 
            text={`${((years * 100)/75).toFixed(1)}%`}
            value={years} 
            maxValue={75} 
            strokeWidth={15}
                styles={buildStyles({
                    rotation: 0,
                    strokeLinecap: "round",
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: "#ff2b00",
                    trailColor: '#9e9e9e',
                    backgroundColor: '#3e98c7',
                    textColor: '#000000',
            })}
          />

        </div>
        <div className="skully-text">
          <div className="user-age">
              <p><span className='mobile__only large-txt'>*{ 75 - years} </span>Years left</p>
              <p className='large-txt hide__on__mobile'>{ 75 - years}</p>
              
          </div>
        </div>

            </div>
            <div className="img-block">
              <img src={Leafy} alt="user skull" className='user-life-skull'/>
                <div className="skully-text">
                  <div className="user-age">
                    <p className='large-txt'>{ years }</p>
                    <p>Years old</p>
                  </div>
                </div>
            </div>

            <div className="img-block">
             <img src={MonthVase} alt="user skull" className='user-life-skull'/>
                <div className="skully-text">
                    <div className="user-age">
                      <p className='large-txt'>{days + months * 30 + years * 365}</p>
                      <p> Days </p>
                    </div>
                </div>
            </div>

          </div>
    </div>
  )
}

export default UserLife;