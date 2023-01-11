import { React, useState } from 'react';
import { signInWithGooglePopUp, createUserDocFromAuth, userSignInEmailPassword } from '../../utils/firebase.utils';
import SignUpForm from '../../components/Sign-up-from/sign-up-form';
import SignInForm from '../../components/Sign-in-form/SignInForm.component'; 
import Button from '../../components/Button/button.component';
import './auth.styles.scss'
const Auth = () => {


  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Auth