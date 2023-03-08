import React from 'react';
import './Footer.scss';
import Skull from '../../assets/images/about.svg';
import AF from "../../assets/images/sale.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <footer>
      <div className="footer-container">
      <div className="footer-left logo">

      </div>
      <div className="footer-right">
      
      <p className='created__by'>Created by 
        <a href="https://allanfernandes.dev/" target="_blank">
          <img src={AF} alt="Allan Fernandes Logo" className="af__logo" title='Allan Fernandes'/>
        </a>
      </p>
      </div>
      </div>
        <div className='copyright'>
          <Link className="copyright link" to="/features">Features</Link>
          <p>Copyright ©  {year} </p>
          <p>version 1.3</p>
        </div>
        
    </footer>
  )
}

export default Footer