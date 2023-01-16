import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase.utils";


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
            setCurrentUser(user);
            console.log(user);
        })
        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}