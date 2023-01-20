import React from 'react';
import "./cart-dropdown.styles.scss";
import Button from "../Button/button.component";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItems from '../cart-items/cart-items.component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

  const {cartDropDownItems} = useContext(CartContext);

  const navigate = useNavigate();
  const goToCheckOutHandler = () => navigate('/checkout')
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
          {
            cartDropDownItems.map(item => <CartItems key={item.id} product={item} />)
          } 
        </div>
        <Button onClick={ goToCheckOutHandler }>checkout</Button>
    </div>
  )
}

export default CartDropdown