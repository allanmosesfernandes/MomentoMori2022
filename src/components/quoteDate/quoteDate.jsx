import {React, useState, useEffect} from 'react'
import './quoteStyles.scss';
import sampleAPI from './sampleAPI.json'
const today = new Date();
const monthNumber = today.getMonth();
const monthDate = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[monthNumber];

let filterQuote = sampleAPI.filter(quote => {
    return quote.monthIndex === monthNumber && quote.date === monthDate;
});

let quoteOfTheDay = filterQuote[0];
let {title, author, text, quote} = quoteOfTheDay;

const QuoteDate = () => {
    const [data, setData ] = useState(null);
    
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.npoint.io/e3ada543b2f069a7948c');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  const {title, author, text} = data;
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

    </>

  )
}

export default QuoteDate