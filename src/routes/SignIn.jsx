import React from 'react'
import { signInWithGooglePopUp } from '../utils/firebase.utils'


const SignIn = () => {

  const logGoogleUser = async () => {
    const user = await signInWithGooglePopUp();
    console.log(user);
  }



  return (
    <div>
        <h2>Hello from Sign in Component</h2>
        <button onClick={logGoogleUser}> Sign in with GOogle</button>
    </div>
  )
}

export default SignIn