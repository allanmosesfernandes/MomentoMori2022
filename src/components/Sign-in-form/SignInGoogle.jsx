import {React} from 'react';
import { signInWithGooglePopup } from '../../utils/firebaseUtils';

const SignInGoogle = () => {
const logGoogleUser = async () => {
  try {
    const response = await signInWithGooglePopup();
    const { user } = response;
    const idTokenResult = await user.getIdTokenResult();
    console.log('User:', user);
    console.log('Birthdate:', idTokenResult.claims.birthdate);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
        <h2>Sign in with Google</h2>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignInGoogle