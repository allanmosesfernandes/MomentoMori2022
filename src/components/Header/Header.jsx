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
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
const Header = () => {

const { currentUser } = useContext(UserContext);

  return (
    <>
        <nav>
        <div className="logo">
            <Link to="/">
                <img className="skull-about" src={Skull} alt='website logo'/>
            </Link>
        </div>
        <div className="nav-links">
            <Link className='nav-link' to="about">
                About
            </Link>
            <Link className='nav-link' to="shop">
               Shop
            </Link>

            {
                currentUser ? (<span className='nav-link' onClick={signOutUser}> Sign Out </span>)
                :
                (<Link className='nav-link' to='/sign-in'> Sign In </Link>)
            }
            
            {
                currentUser ? <CartIcon /> : null
            }
            <CartDropdown />

        </div>
        
    </nav>
    <Outlet />
    <Footer />
    </>
  )
}

export default Header