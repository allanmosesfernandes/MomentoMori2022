import React from 'react'
import { Link } from 'react-router-dom'
import './ack.scss'
const Acknowledgement = () => {
  return (
    <div className='quote-container'>

       <div className="disclaimer-block quote-subtext">
        <h4 className='date-container'>DISCLAIMER</h4>
        <p>
            Please be advised that all of the quotes featured on this website are sourced from the book 'The Daily Stoic' by Ryan Holiday. We do not own any of the content on this section and intend no copyright infringement. Our website is simply a tool to spread the teachings of stoicism and the work of Ryan Holiday. We highly recommend <a href="https://ryanholiday.net/ryan-holiday-books/">checking out his work</a> as it has greatly inspired our website and its mission to help users incorporate the principles of stoicism into their daily lives. 
        </p>
        <p className='suggestion-box'>
         <Link to="features"> Have a suggestion? </Link>
         
        </p>
       </div>
    </div>
  )
}

export default Acknowledgement