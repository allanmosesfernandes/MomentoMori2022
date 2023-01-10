import { React, useState } from 'react';
import FormInput from '../formInput/FormInput';
import Button from '../Button/button.component';
import './sign-in-form.styles.scss'
import { createUserDocFromAuth, userSignInEmailPassword, signInWithGooglePopUp } from '../../utils/firebase.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
const SignInForm = () => {

const defaultFormFields = {
    email: "",
    password: "",
}

const [formFields, setformFields] = useState(defaultFormFields);
const {email, password} = formFields;

//==Form Change Handlers ==//
const handleChange = (event) => {
    const {name, value} = event.target;
    setformFields({...formFields, [name]:value})
}

//== Reset Form Fields ===//
const resetFormFields = () => {
    setformFields(defaultFormFields)
}
//==Form Submit Handler ==//

const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const response = await userSignInEmailPassword(email, password);
        if(response.user) resetFormFields();
        console.log(response.user);
    }
    catch(error){
        console.log(error);
    }

}

//==Form Submit Handler ==//

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    console.log("user signed in with google popup")
  }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <p>Sign in with email and password</p>
        <form onSubmit={handleSubmit}>

            <FormInput 
                required
                label="email"
                type="text" 
                placeholder=''
                value={email}
                name="email"
                onChange={handleChange}
            />

            <FormInput 
                label="password"
                type="password" 
                value={password}
                name="password"
                onChange={handleChange}
            />
            <div className='button__container'>
                <Button type="submit" buttonType="default">Sign In</Button>
               {/*  <Button onClick={logGoogleUser} buttonType="google">Sign In With Google</Button> */}
                <button onClick={logGoogleUser} className="google-brand"> <FontAwesomeIcon icon={faGoogle} /></button>
               
            </div>

        </form>
    </div>
  )
}

export default SignInForm

