import { useState } from "react";
import { createContext } from "react";
import PRODUCT_DATA from './products.json';


export const ProductsContext = createContext({
    products: [],
    setProducts: () => null
});

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCT_DATA);
    const value = {products, setProducts};

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}