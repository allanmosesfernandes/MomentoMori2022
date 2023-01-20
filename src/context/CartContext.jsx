import { useEffect } from "react";
import { createContext, useState } from "react";


const addProductToDropDownHelperFn = (cartDropDownItems, productToAdd) => {
    
    //first check if item exists
    const doesItemExist = cartDropDownItems.find(item => item.id === productToAdd.id);
    

    // if it exists, increase quantity by existing quantity + 1

    if(doesItemExist) {
     return cartDropDownItems.map(item => item.id === productToAdd.id ?
        {...item, quantity: item.quantity + 1} : item)       
    }

    // if doesnt exists, just increase quantity by 1
    return [...cartDropDownItems, {...productToAdd, quantity:1}]
}

//=====Remove Product From DropDown==========//
const removeProductFromDropDownHelperFn = (cartDropDownItems, productToRemove) => {

    //==Check for the exact Item we need to remove ==//
    const exactItem = cartDropDownItems.find(item => item.id === productToRemove.id);

    //== Check if quantity is equal to one, if yes remove from array

    if(exactItem.quantity === 1) {
        return cartDropDownItems.filter(item => item.id !== exactItem.id);
    }

    return cartDropDownItems.map(item => item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item)
}

export const CartContext = createContext({
    isCartOpen: false,
    setCartOpen: () => {},
    cartDropDownItems: [],
    addProductToDropDown: () => {},
    cartCount: 0,
    removeProductFromDropDown: () => {}
})


export const CartContextProvider = ({children}) => {

    const [isCartOpen, setCartOpen] = useState(false);
    const [cartDropDownItems,setCartDropDownItems,] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartDropDownItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartDropDownItems])
    
    const addProductToDropDown = (product) => {
        setCartDropDownItems(addProductToDropDownHelperFn(cartDropDownItems, product))
    }
    
    const removeProductFromDropDown = (product) => {
        setCartDropDownItems(removeProductFromDropDownHelperFn(cartDropDownItems, product))
    }
    
    const value = {
        isCartOpen,
        setCartOpen,
        addProductToDropDown,
        removeProductFromDropDown,
        cartDropDownItems,
        cartCount,
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}