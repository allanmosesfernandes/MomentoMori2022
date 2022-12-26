import React from 'react'
import Logo from '../../assets/images/skull_logo_2.png'
import Home from '../../assets/images/home.svg'
import Skull from '../../assets/images/skully.svg'
import DarkModeToggle from '../../assets/images/moon.svg'

import './header.scss';

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} className="logo-image" alt='website logo'/>
        </div>
        <div className="nav-links">
            <ul>
                <li><img src={Home} /></li>
                <li><img src={Skull} /></li>
                <li><img src={DarkModeToggle} /></li>
                <li>Sign In</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header