'use client';

import { signIn, useSession } from 'next-auth/react';

const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <button type="button" onClick={() => signIn('github')}>
      Sign in
    </button>
  );
};

export default SignInButton;
