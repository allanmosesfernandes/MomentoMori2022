import React from 'react';
import './product-card.styles.scss';
import Button from '../Button/button.component'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ProductCard = ({product}) => {

const {imageUrl, name, price} = product;

const {addProductToDropDown} = useContext(CartContext);

const addProduct = () => addProductToDropDown(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProduct}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard