import React from 'react';
import './Footer.scss';
import Skull from '../../assets/images/about.svg'
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <footer>
      <div className="footer-container">
      <div className="footer-left">
        <img src={Skull} />

      </div>
      <div className="footer-right">
      
      <p>Created by <a href="https://allanfernandes.dev/" target="_blank">?</a></p>
      </div>
      </div>
        <p className='copyright'>Copyright ©  {year} </p>

    </footer>
  )
}

export default Footer