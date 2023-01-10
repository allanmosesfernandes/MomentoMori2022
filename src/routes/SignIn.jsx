import { React, useState } from 'react';
import { signInWithGooglePopUp, createUserDocFromAuth, userSignInEmailPassword } from '../utils/firebase.utils';
import SignUpForm from '../components/Sign-up-from/sign-up-form';
import Button from '../components/Button/button.component';
const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
  }

  const signInForm = async (event) => {
    event.preventDefault();
    const response = await userSignInEmailPassword(email,password);
    console.log(response);
  }

  const defaultFormFields = {
    email: "",
    password: ""
  }


  const [formFields, setformFields] = useState(defaultFormFields);
  const { email,password } = formFields;

  const handleChange = (event) => {
     const {name, value} = event.target;
    setformFields({
      ...formFields,
      [name]:value,
    })
  }

  return (
    <div>
      <div className="sign-in-container group">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={ signInForm }>
            <label>email</label>
            <input 
              type="email" 
              placeholder='Email' 
              className='form-input'
              name='email'
              onChange={handleChange}
            />

            <label>password</label>
            <input 
              type="password" 
              placeholder='******' 
              className='form-input'
              name='password'
              onChange={handleChange}
            />

            <Button type='submit'>Sign In</Button>
        </form>
      </div>


        <Button onClick={logGoogleUser} buttonType="google"> Sign in with Google</Button>
        <SignUpForm />
    </div>
  )
}

export default SignIn