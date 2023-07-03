'use client';
import React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/registry/new-york/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card';
import { Input } from '@/registry/new-york/ui/input';
import { Label } from '@/registry/new-york/ui/label';

import { firebaseAuth, googleProvider } from '@/firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleEmailSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.log(e);
    } finally {
      return router.push('/home');
    }
  };

  const handleGoogleAuth = async () => {
    try {
      signInWithPopup(firebaseAuth, googleProvider).then(async (userCred) => {
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
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className="w-96 border-0 shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
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
        <Button onClick={(e) => handleEmailSignIn(e)} className="w-full">
          Sign In
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
        <Button variant="outline" onClick={() => handleGoogleAuth()}>
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>Don&apos;t have an account?</CardDescription>
        <Link href="/signup">
          <CardDescription className="underline underline-offset-4">
            Sign up
          </CardDescription>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Page;
