import {React} from 'react';
import { signInWithGooglePopup } from '../../utils/firebaseUtils';

const SignInGoogle = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
  return (
    <div>
        <h2>Sign in with Google</h2>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignInGoogle