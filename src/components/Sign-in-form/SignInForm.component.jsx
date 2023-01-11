import { React, useState } from 'react';
import FormInput from '../formInput/FormInput';
import Button from '../Button/button.component';
import './sign-in-form.styles.scss'
import { createUserDocFromAuth, userSignInEmailPassword, signInWithGooglePopUp } from '../../utils/firebase.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
        if(response) {
            const {user} = response;
            const {email} = user;
            resetFormFields();
            toast.success(`Welcome ${email} `)
        };
    }
    catch(error){
        let errorMessage = "";
        console.log(error.message)
        switch(error.code) {
      
            case "auth/user-not-found":
                errorMessage = "We're sorry, but we couldn't find an account associated with that email address. Please double-check the email you entered and try again, or create a new account";
                break;

            case "auth/wrong-password":
                errorMessage = "We're sorry, but the password you entered is incorrect. Please double-check your password and try again";
                break;

            case "auth/account-exists-with-different-credential":
                errorMessage = "An account already exists with this email. Please sign in with that account or link the social account with that email address.";
                break;

            default:
                errorMessage = "There was a problem creating your account. Please try again later";
        }

       toast.error(errorMessage);
    }

}

//==Form Submit Handler ==//

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const {displayName} = user;
    const userDocRef = await createUserDocFromAuth(user);
    toast.success(`Welcome back ${displayName}`)
  }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <p>Sign in with email and password</p>
        <form onSubmit={handleSubmit}>

            <FormInput 
                required
                label="Email"
                type="email" 
                placeholder=''
                value={email}
                name="email"
                onChange={handleChange}
                
            />

            <FormInput 
                label="Password"
                type="password" 
                value={password}
                name="password"
                onChange={handleChange}
                required
            />
            <div className='button__container'>
                <Button type="submit" buttonType="default">Sign In</Button>
               {/*  <Button onClick={logGoogleUser} buttonType="google">Sign In With Google</Button> */}
                <button type="button" onClick={logGoogleUser} className="google-brand"> <FontAwesomeIcon icon={faGoogle} /></button>
               
            </div>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
    
    </form>
    </div>
  )
}

export default SignInForm

