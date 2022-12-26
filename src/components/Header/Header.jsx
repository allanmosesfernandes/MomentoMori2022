import React from 'react'
import Logo from '../../assets/images/skull_logo_2.png'
import Home from '../../assets/images/home.svg'
import Skull from '../../assets/images/skully.svg'
import DarkModeToggle from '../../assets/images/moon.svg'
import { Link, Outlet } from 'react-router-dom'
import './header.scss';

const Header = () => {
  return (
    <>
        <nav>
        <div className="logo">
            <Link to="/">
                <img src={Logo} className="logo-image" alt='website logo'/>
            </Link>
        </div>
        <div className="nav-links">
            <Link className='nav-link' to="/about">
                <img src={Skull} alt="skull logo" />
            </Link>
        </div>
    </nav>
    <Outlet />
    </>

  )
}

export default Header