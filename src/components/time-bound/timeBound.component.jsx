import { useState, useEffect } from 'react'
import PieChart from '../PieChart/piechart'
import './timeBound.styles.scss';
import TodayTimeBlock from '../TimeComponents/today/TodayTimeBlock';
import Month from '../TimeComponents/month/Month';
import YearProgress from '../TimeComponents/yearProgress/YearProgress';
const TimeBound = () => {

//== Set State for days, weeks, 
  const [timePassed, setTimePassed] = useState({
    days: 0,
    weeks: 0,
    hours: 0,
    minutes: 0,
    daysLeft: 365,
  })
const [chartData, setChartData] = useState({
    labels: ["Days Passed", "Days Left"],
    datasets: [{
      label: 'Popularity of colours',
      data: [timePassed.days, 365],
      backgroundColor: ["#fff", "#357ae8"],
    }]
});
  useEffect(() => {
    const firstDayof2023 = new Date("2023-01-01");
    const currentDay = new Date();
    const differenceInMilliSeconds = currentDay - firstDayof2023;

    const daysPassed  = Math.floor(differenceInMilliSeconds / (1000 * 60 * 60 * 24));
    const weeksPassed = Math.floor(daysPassed / 7);
    const daysLeft = 365;
    setTimePassed({
    days: daysPassed,
    weeks: weeksPassed,
    hours: 0,
    minutes: 0,
    daysLeft: 365 - daysPassed,
    })
    setChartData({
    labels: ["Days Passed", "Days Left"],
    datasets: [{
      label: 'Popularity of colours',
      data: [timePassed.days, 365],
      backgroundColor: ["#fff", "#357ae8"],
    }]
    })
  }, [])

  //=== Setting Data for Chart Component ===//
  



  return (
    <div className='quote-container'>
      {/* <h2>{timePassed.days} days / 365 have passed since the year began</h2>
      <h2>{timePassed.weeks} weeks  / 52 have passed since the year began</h2> */}
      <div className='time-clocks-container'>
        {/* <PieChart chartData={chartData} /> */}
        <TodayTimeBlock />
        <YearProgress />
        <Month />
      </div>
   
    </div>
  )
}

export default TimeBound


