import React from 'react';
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase.utils';
import SignUpForm from '../components/Sign-up-from/sign-up-form';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  }

  
  return (
    <div>
        <h2>Hello from Sign in Component</h2>
        <button onClick={logGoogleUser}> Sign in with Google</button>
        <SignUpForm />
    </div>
  )
}

export default SignIn