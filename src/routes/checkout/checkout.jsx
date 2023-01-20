import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutItems from './checkout-items.component';
import '../checkout/checkout-items.styles.scss'
const Checkout = () => {

const {cartDropDownItems, addProductToDropDown} = useContext(CartContext);


console.log(cartDropDownItems);

    return (

    <div className='checkout-item-box'>
        {
            cartDropDownItems.map((item) => {
                const {name,quantity, price} = item;
                return <div className="checkout-item" key={item.id}>
                        <h2>{name}</h2>
                        
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