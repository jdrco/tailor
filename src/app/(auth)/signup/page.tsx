'use client';
import React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/new-york/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/new-york/ui/card';
import { Input } from '@/components/ui/new-york/ui/input';
import { Label } from '@/components/ui/new-york/ui/label';

import { firebaseAuth, googleProvider } from '@/firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailLoading, setEmailLoading] = React.useState<boolean>(false);

  const router = useRouter();

  const handleEmailSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setEmailLoading(true);

    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        async (userCred) => {
          if (!userCred) {
            return;
          }

          fetch('/api/signin', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${await userCred.user.getIdToken()}`,
            },
          }).then((response) => {
            if (response.status === 200) {
              router.push('/home');
            }
          });
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setEmailLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(firebaseAuth, googleProvider).then(
        async (userCred) => {
          if (!userCred) {
            return;
          }

          fetch('/api/signin', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${await userCred.user.getIdToken()}`,
            },
          }).then((response) => {
            if (response.status === 200) {
              router.push('/home');
            }
          });
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Card className="w-96 border-0 shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>
          Enter your email and password to sign up
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={(e) => handleEmailSignUp(e)} className="w-full">
          {emailLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Sign up
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" onClick={handleGoogleAuth}>
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>Already have an account?</CardDescription>
        <Link href="/signin">
          <CardDescription className="underline underline-offset-4">
            Sign in
          </CardDescription>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Page;
