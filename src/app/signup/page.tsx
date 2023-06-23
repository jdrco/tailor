'use client';
import React from 'react';
import signUp from '@/firebase/auth/signup';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import googleAuth from '@/firebase/auth/googleauth';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push('/home');
  };

  const handleGoogleSignUp = async () => {
    const { result, error } = await googleAuth();

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push('/home');
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
        <Button onClick={handleGoogleSignUp}>Google Sign Up</Button>
      </div>
    </div>
  );
}

export default Page;
