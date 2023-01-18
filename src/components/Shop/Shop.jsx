import React from 'react'
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from '../product-card/product-card.component';
const Shop = () => {
   
  const {products} = useContext(ProductsContext);
  return (
    <div className='product-container'>
      {
        products.map(prod => {
            return <ProductCard key={prod.id} product={prod} />
        })
      }
    </div>
  )
}

export default Shop