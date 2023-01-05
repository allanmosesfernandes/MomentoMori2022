import { React, useState } from 'react';

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

  return (
    <div>
        <h1>Sign up with your email and password!</h1>
        <form onSubmit={() => {}}>
            <label>Display Name</label>
            <input 
                required 
                type="text" 
                placeholder=''
                value={displayName}
                name="displayName"
                onChange={handleChange}
            />

            <label>Email</label>
            <input 
                required 
                type="email" 
                placeholder=''
                value={email}
                name="email"
                onChange={handleChange}
            />

            <label>Password</label>
            <input 
                required 
                type="password" 
                placeholder='******'
                value={password}
                name="password"
                onChange={handleChange}
            />
            
            <label>Confirm Password</label>
            <input 
                required 
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

