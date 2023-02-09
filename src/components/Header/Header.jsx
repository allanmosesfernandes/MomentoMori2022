import { useState, useEffect, useContext } from 'react'
import Logo from '../../assets/images/skull_logo_2.png'
import Home from '../../assets/images/home.svg'
import ShoppingBag from "../../assets/shopping-bag.svg"
import Skull from '../../assets/images/about.svg'
import { UserContext } from '../../context/UserContext'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.component'
import './header.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import { signOutUser } from '../../utils/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactSVG } from "react-svg";

import { CartContext } from '../../context/CartContext';

const Header = () => {
const {isCartOpen} = useContext(CartContext);
const { currentUser } = useContext(UserContext);

const themeSwitch = document.getElementById("theme-switch");
const fakeCheckbox = document.getElementById("fake");

themeSwitch.addEventListener("change", function () {
  fakeCheckbox.checked = this.checked;
});

fakeCheckbox.addEventListener("change", function () {
  themeSwitch.checked = this.checked;
});

  return (
    <>
    <nav>
        <div className="logo">
            <Link to="/">
{/*             <img className="skull-about" src={Skull} alt='website logo'/>  */}

            </Link>
        </div>
        <div className="nav-links">
            <Link className='nav-link' to="about">
                About
            </Link>
{/*             <Link className='nav-link' to="shop">
               Shop
            </Link>

            {
                currentUser ? (<span className='nav-link' onClick={signOutUser}> Sign Out </span>)
                :
                (<Link className='nav-link' to='/sign-in'> Sign In </Link>)
            }
            
            {
                currentUser ? (<span className='nav-link' onClick={signOutUser}> Sign Out </span>):(<Link className='hide-for-now nav-link' to='/sign-in'> Sign In </Link>)
            }  */}
 
        </div>
        
    </nav>
    <Outlet />
    <Footer />
    </>
  )
}

export default Header