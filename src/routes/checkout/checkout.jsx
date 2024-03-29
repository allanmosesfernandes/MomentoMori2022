import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItems from './checkout-items.component';
import '../checkout/checkout-items.styles.scss'
const Checkout = () => {

const {cartDropDownItems, addProductToDropDown,removeProductFromDropDown} = useContext(CartContext);

    return (

    <div className='checkout-item-box'>
        {
            cartDropDownItems.map((item) => {
                const {name,quantity, price} = item;
                return <div className="checkout-item" key={item.id}>
                        <h2>{name}</h2>
                        <button onClick={() => removeProductFromDropDown(item)}> - </button>
                        <p>{quantity}</p>
                        <button onClick={() => addProductToDropDown(item)}> + </button>
                        <p>{price}</p>
                </div>
            }) 
        }
    </div>
    )
}

export default Checkout