import React from 'react';
import "./pagenotfound.styles.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
  return (
    <div className='quote-container page-not-found'>
        <h2>Error 404</h2>
        <p>Page not found</p>
        <div className="link-container">
        <Link to="/">GO HOME  <FontAwesomeIcon icon={faChevronRight} /></Link>
       
        </div>


    </div>
  )
}

export default PageNotFound