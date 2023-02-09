import {React, useState, useEffect} from 'react'
import './quoteStyles.scss';
import { getQuotesAndDocuments } from '../../utils/firebase.utils';


const today = new Date();
const monthNumber = today.getMonth();
const monthDate = today.getDate();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = monthNames[monthNumber].toLowerCase();

const QuoteDate = () => {
  const [quotesData, setQuotesData ] = useState(null);

  useEffect(() => {

    const getQuotesMap = async () => {
      const quotesMap = await getQuotesAndDocuments();
      setQuotesData(quotesMap);
    }

    getQuotesMap();
  }, []);

  if (!quotesData) {
    return <span className="loader"></span>;
  }

  const quoteOfTheDay = quotesData[monthName].filter(quote => quote.date === monthDate)[0];
  const { title,quote,author,text } = quoteOfTheDay;
  return (
    <>
    <div className="quote-container first-fold">
        <div className='date-container'>
            <h2>{`${monthName.toUpperCase()},  ${monthDate}`}</h2>
            <p>{title}</p>
        </div>
        <div className="quote-body">
            <p className='quote-highlight'>{quote}</p>
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