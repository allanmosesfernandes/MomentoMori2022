import { React, useState } from 'react';
import FormInput from '../formInput/FormInput';
import Button from '../Button/button.component';
import './sign-up-form.styles.scss'
import { createAuthUserEmailPassword, createUserDocFromAuth } from '../../utils/firebase.utils';
const SignUpForm = () => {

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const [formFields, setformFields] = useState(defaultFormFields);
const {displayName, email, password, confirmPassword} = formFields;


const handleChange = (event) => {
    const {name, value} = event.target;
    
    setformFields({...formFields, [name]:value})
}

//== Reset Form Fields ===//
const resetFormFields = () => {
    setformFields(defaultFormFields)
}


const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
            alert("Password and confirm Password do not match");
            return;
    }

    try{
        const {user} = await createAuthUserEmailPassword(email, password);
        const additionalData = {displayName}
        const response = await createUserDocFromAuth(user, additionalData);
        if(user) resetFormFields();
        console.log(response);
        
    }
    catch(error){
        console.log(error);
    }

}
  return (
    <div className='sign-up-container'>
        <h1>Sign up with your email and password!</h1>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name"
                type="text" 
                placeholder=''
                value={displayName}
                name="displayName"
                onChange={handleChange} />

            <FormInput 
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
            
            <FormInput 
                label="Confirm Password"
                type="password" 
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
            />
            <Button type="submit" buttonType="default">Sign up</Button>
            
        </form>
    </div>
  )
}

export default SignUpForm

