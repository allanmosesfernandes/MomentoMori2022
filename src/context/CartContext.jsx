import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";



const addProductToDropDownHelperFn = (cartDropDownItems, productToAdd) => {
    

    //first check if item exists
    const doesItemExist = cartDropDownItems.find(item => item.id === productToAdd.id);
    

    // if it exists, increase quantity by existing quantity + 1

    
    if(doesItemExist) {
     return cartDropDownItems.map(item => item.id === productToAdd.id ?
        {...item, quantity: item.quantity + 1} : {item})       
    }









    return [...cartDropDownItems, {...productToAdd, quantity:1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => {},
    cartDropDownItems: [],
    addProductToDropDown: () => {}
})


export const CartContextProvider = ({children}) => {

    const [isCartOpen, setCartOpen] = useState(false);
/*     const addProductToDropDown = (productToAdd) => addProductToDropDownHelperFn(cartDropDownItems, productToAdd); */
    const [cartDropDownItems,setCartDropDownItems,] = useState([]);
    const addProductToDropDown = (product) => {
        setCartDropDownItems(addProductToDropDownHelperFn(cartDropDownItems, product))
    }
    
    const value = {isCartOpen,setCartOpen,addProductToDropDown}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}