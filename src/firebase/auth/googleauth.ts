import firebase_app from '../config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function googleAuth() {
  let result = null,
    error = null;
  const provider = new GoogleAuthProvider();

  try {
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
