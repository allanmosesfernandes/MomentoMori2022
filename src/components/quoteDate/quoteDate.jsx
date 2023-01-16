import {React, useState, useEffect} from 'react'
import './quoteStyles.scss';
import sampleAPI from './sampleAPI.json'
const today = new Date();
const monthNumber = today.getMonth();
const monthDate = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[monthNumber];
const QuoteDate = () => {
    const [data, setData ] = useState(null);
    
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.npoint.io/0276e85a262fcefdbe7e');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  let filterQuote = data.filter(quote => {
    return quote.monthIndex === monthNumber && quote.date === monthDate;
});

let quoteOfTheDay = filterQuote[0];
let {title, author, text, quote} = quoteOfTheDay;
  return (
    <>
    <div className="quote-container">
        <div className='date-container'>
            <h2>{`${monthName}, ${monthDate}`}</h2>
            <p>{title}</p>
        </div>
        <div className="quote-body">
            <p>{quote}</p>
            <small>- {author}</small>
            <p className='quote-subtext'>
                {text}
            </p>
        </div>

    </div>
    <div className="custom-shape-divider-bottom-1673555143">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
    </div>
    </>

  )
}

export default QuoteDate