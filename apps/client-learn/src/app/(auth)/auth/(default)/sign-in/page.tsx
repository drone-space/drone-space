import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@repo/ui/layout/page';
import FormAuth from '@repo/ui/form/auth';
import { AuthAction } from '@repo/types/enums';
import { BASE_URL_CLIENT } from '@repo/constants/paths';

export const metadata: Metadata = { title: 'Sign In' };

export default function SignIn() {
  return (
    <LayoutPage>
      <FormAuth
        action={AuthAction.SIGN_IN}
        header={{
          title: 'Welcome Back!',
          desc: 'Sign in to access your personalized experience.',
        }}
        baseUrl={BASE_URL_CLIENT.LMS}
      />
    </LayoutPage>
  );
}
