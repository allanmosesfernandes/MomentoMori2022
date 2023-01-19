import React from 'react'
import {ReactComponent as CartIconImg} from "../../assets/shopping-bag.svg";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './cart-icon.styles.scss';


const CartIcon = () => {
const {cartCount} = useContext(CartContext);

const {isCartOpen, setCartOpen} = useContext(CartContext);
const toggleShoppingCart = () => setCartOpen(!isCartOpen);

console.log(isCartOpen);
  return (
    <div className='cart-icon-container'>
        <CartIconImg className='shopping-icon' onClick={toggleShoppingCart}/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon