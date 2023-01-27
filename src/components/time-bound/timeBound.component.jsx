import './timeBound.styles.scss';
import TodayTimeBlock from '../TimeComponents/today/TodayTimeBlock';
import Month from '../TimeComponents/month/Month';
import YearProgress from '../TimeComponents/yearProgress/YearProgress';
const TimeBound = () => {

  return (
    <div className='quote-container'>
      <div className='time-clocks-container'>
        <TodayTimeBlock />
        <Month />
        <YearProgress />
      </div>
    </div>
  )
}

export default TimeBound


