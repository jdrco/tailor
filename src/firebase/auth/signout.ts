import firebase_app from '../config';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebase_app);

export default async function signout() {
  let result = false,
    error = null;
  try {
    await signOut(auth);
    result = true;
  } catch (e) {
    error = e;
  }

  return { result, error };
}
