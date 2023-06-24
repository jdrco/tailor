import firebase_app from '../config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebase_app);

const googleAuth = async () => {
  let result = null,
    error = null;
  const provider = new GoogleAuthProvider();

  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default googleAuth;
