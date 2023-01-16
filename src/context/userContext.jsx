import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    // use effect to track and load authentication changes

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        })
        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}