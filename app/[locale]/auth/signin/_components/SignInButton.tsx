'use client';

import { useSession, signIn } from 'next-auth/react';

const SignInButton = () => {
  const { data: session } = useSession();

  console.log('===== session, ', session);

  return (
    <button type="button" onClick={() => signIn('github')}>
      Sign in
    </button>
  );
};

export default SignInButton;
