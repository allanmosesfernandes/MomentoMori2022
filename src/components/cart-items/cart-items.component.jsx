import React from 'react';
import './cart-items.scss';


const CartItems = ({product}) => {


const {name, quantity, imageUrl, price} = product;

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItems