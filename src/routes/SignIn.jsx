import React from 'react';
import { signInWithGooglePopUp, createUserDocFromAuth } from '../utils/firebase.utils';
import SignUpForm from '../components/Sign-up-from/sign-up-form';
import Button from '../components/Button/button.component';
const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  }

  
  return (
    <div>
        <h2>Hello from Sign in Component</h2>
        <Button onClick={logGoogleUser} buttonType="google"> Sign in with Google</Button>
        <SignUpForm />
    </div>
  )
}

export default SignIn