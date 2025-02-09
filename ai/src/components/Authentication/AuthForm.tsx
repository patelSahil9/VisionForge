'use client';

import React from 'react';
import Link from 'next/link';
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignupForm from './SignupForm';
import ResetPasswordForm from './ResetpasswordForm';
const AuthForm = () => {
  const [mode, setMode] = React.useState('login');

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 content-center">
        <h1 className="text-xl font-semibold text-center tracking-tight">
          {mode === 'Reset'
            ? 'Reset Password'
            : mode === 'login'
            ? 'Login'
            : 'Signup'}
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          {mode === 'reset'
            ? 'Enter your email to reset your password'
            : mode === 'login'
            ? 'Enter your email below to login to your account'
            : 'Enter your information below to create an account'}
        </p>
            {
                mode === 'login' && <>
                < LoginForm />
                <div className='text-center flex justify-between'>
                  <Button variant="link" className="p-0" onClick={() => setMode('Signup')}>Need an account? Sign Up</Button>
                  <Button variant="link" className="p-0" onClick={() => setMode('Reset')}>Forgot Password?</Button>

                </div>
                </> 
            }
            {
                mode === 'Signup' && <>
                < SignupForm />
                <div className='text-center flex justify-between'>
                  <Button variant="link" className="p-0" onClick={() => setMode('login')}>Already have an account? Sign In</Button>

                </div>
                <p className='px-8 text-center text-sm text-muted-foregrounded'>
                  By clicking continue, you agree to our <Link href='#' className='underline underline-offset-4'>Terms of Service</Link> and <Link href='#' className='underline underline-offset-4'>Privacy Policy</Link>. 
                </p>
                </> 
            }
            {
                mode === 'Reset' &&<> <ResetPasswordForm />
                <p className='px-8 text-center text-sm text-muted-foreground'>
                  <Link href="#" className="underline underline-offset-4" onClick={() => setMode('login')}>Back to Login</Link>
                </p>
                </>
            }
      </div>
    </div>
  );
};

export default AuthForm;

