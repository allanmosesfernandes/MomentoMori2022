import {React, useState, useEffect} from 'react'
import './quoteStyles.scss';
import { getQuotesAndDocuments } from '../../utils/firebase.utils';
import QUOTES from "../../assets/quotes.js"

const today = new Date();
const monthNumber = today.getMonth();
const monthDate = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[monthNumber];
const QuoteDate = () => {
  const [quotesData, setQuotesData ] = useState(null);
  /* 
  
  Commenting this bit below out because we're fetching internally
  No need to make calls to the Database right now 

  */
   useEffect(() => {

  //   const getQuotesMap = async () => {
  //     const quotesMap = await getQuotesAndDocuments();
  //     setQuotesData(quotesMap);
  //   }

     setQuotesData(QUOTES);
   }, []);

  if (!quotesData) {
    return <span className="loader"></span>;
  } 
    const quoteOfTheDay = quotesData.filter(quote => quote.title === monthName)[0].quotes.filter(quote => quote.date == monthDate);
     const { title,quote,author,text } = quoteOfTheDay[0];
  return (
    <>
    
    { 
      <div className="quote-container first-fold" id="quoteOfDay">
          <div className='date-container'>
              <h2>{`${monthName.toUpperCase()},  ${monthDate}`}</h2>
              <p>{title}</p>
          </div>
          <div className="quote-body">
              <p className='quote-highlight'>
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