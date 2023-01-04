import React from 'react'
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef)
  }

  
  return (
    <div>
        <h2>Hello from Sign in Component</h2>
        <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  )
}

export default SignIn