import React from 'react'
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

const Shop = () => {
   
    const {products} = useContext(ProductsContext);
    console.log(products);
  return (
    <div>{
        products.map(prod => {
            return <h1 key={prod.id}>{prod.name}</h1>
        })
        
        }</div>
  )
}

export default Shop