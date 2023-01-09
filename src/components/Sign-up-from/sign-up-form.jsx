import { React, useState } from 'react';
import FormInput from '../formInput/FormInput';
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

const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
            alert("Password and confirm Password do not match");
            return;
    }

    try{
        const {user} = await createAuthUserEmailPassword(email, password);
        const response = await createUserDocFromAuth(user, {displayName});
        console.log(response);
    }
    catch(error){
        console.log(error);
    }

}
  return (
    <div>
        <h1>Sign up with your email and password!</h1>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name"
                type="text" 
                placeholder=''
                value={displayName}
                name="displayName"
                onChange={handleChange} />

            <label>Display Name</label>
            <input 
                type="text" 
                placeholder=''
                value={displayName}
                name="displayName"
                onChange={handleChange}
            />

            <label>Email</label>
            <input 
                type="email" 
                placeholder=''
                value={email}
                name="email"
                onChange={handleChange}
            />

            <label>Password</label>
            <input 
                 
                type="password" 
                placeholder='******'
                value={password}
                name="password"
                onChange={handleChange}
            />
            
            <label>Confirm Password</label>
            <input 
                 
                type="password" 
                placeholder='******'
                value={confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
            />

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm

