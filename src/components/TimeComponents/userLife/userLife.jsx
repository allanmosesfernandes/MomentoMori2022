import React from 'react';
import { useState, useEffect } from 'react';
import './user-life.styles.scss';
import Skull from '../../../assets/images/skull-white.svg';

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
  if (ageFromLocalStorage) {
    setAge(JSON.parse(ageFromLocalStorage));
  }
  }, []);
  function calculateAge(birthday) {
    let birthDayString = birthday.toISOString();
    console.log(birthDayString);
    let userYear = birthDayString.split("-")[0];
    let userMonth = Number(birthDayString.split("-")[1]);
    let userDay = birthday.getDate();
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    setAge({
      years: Math.abs(ageDate.getUTCFullYear() - 1970),
      months: Math.abs(ageDate.getUTCMonth()),
      days: Math.abs(ageDate.getUTCDate() - 1),
      userYear,
      userMonth: userMonth,
      userDay: userDay,
    });
    window.localStorage.setItem('age', JSON.stringify(age));
  }
    const openDatePicker = (event) => {
      const native = document.getElementById("native-date-picker");
      native.showPicker();
    // event.target.showPicker();
};

    const { years, months, days,userMonth, userDay} = age;


  return (
    <div className='quote-container user-life-component'>
      <div className="user-date-container" onClick={openDatePicker}>
        <span>ENTER YOUR DATE OF BIRTH</span>
        <input 
        id="native-date-picker"
        type="date"
        placeholder="YYYY / MM / DD"
        onChange={e => calculateAge(new Date(e.target.value))}
        required
         />

        </div>

        <div className='user-life-card'>
            <div className="img-block">
             <img src={Skull} alt="user skull" className='user-life-skull'/>
              <div className="skully-text">
              <p className='pseudo-border'>Your Life,</p>
              <p className='large-txt'>
                { userMonth === undefined || userMonth === 0 ? '????' : `${CalendarMonths[userMonth - 1 ]} ${userDay}, ${age.userYear}` }
              </p>

              </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{ years }</p>
              <p>
                Years old
              </p>
            </div>

            <div className="img-block">
              <lottie-player className="lottie-animation" src="https://assets10.lottiefiles.com/packages/lf20_kw3ernmh.json"  background="transparent"  speed="0.5"  loop  autoplay></lottie-player>

               <div className="skully-text inline">
                <p className='large-txt'>{days + months * 30 + years * 365} </p>
                <p>Days </p> 
               </div>
            </div>

            <div className="user-age">
              <p className='large-txt'>{months + years * 12}</p>
              <p> Months </p>
            </div>
          </div>
    </div>
  )
}

export default UserLife;