import {React, useState, useEffect} from 'react'
import './quoteStyles.scss';
import QUOTES from "../../assets/quotes.js"
import { useRef } from 'react';
const today = new Date();
const monthNumber = today.getMonth();
const monthDate = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[monthNumber];
const QuoteDate = () => {
  const [quotesData, setQuotesData ] = useState(null);
  const wisdomRef = useRef(null);
  useEffect(() => {

  //   const getQuotesMap = async () => {
  //     const quotesMap = await getQuotesAndDocuments();
  //     setQuotesData(quotesMap);
  //   }
    if (window.location.hash === '#wisdom') {
      setTimeout(() => {
        wisdomRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
     setQuotesData(QUOTES);
   }, []);

  if (!quotesData) {
    return <span className="loader"></span>;
  } 
    const quoteOfTheDay = quotesData.filter(quote => quote.title === monthName)[0].quotes.filter(quote => quote.date == monthDate);
    const { title,quote,author,text } = quoteOfTheDay[0];
    console.log(quoteOfTheDay);
    
  return (
    <>
    
    { 
      <div className="quote-container first-fold" id="wisdom" ref={wisdomRef} >
          <div className='date-container'>
              <h2>{`${monthName.toUpperCase()},  ${monthDate}`}</h2>
              <p>{title}</p>
          </div>
          
          <div className="quote-body">
              <p className='quote-highlight' id="">
                {quote}
                </p>
              <small>- {author}</small>
              <p className='quote-subtext'>
                <span className='quote-capitalize'>{text.charAt(0)}</span>
                  {text.slice(1)}
              </p>
          </div>
      </div>  
    }

    </>

  )
}

export default QuoteDate