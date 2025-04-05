import { Metadata } from 'next';

import SignInButton from './components/SignInButton';

export const metadata: Metadata = {
  title: 'Logowanie',
};

const SignIn = () => {
  return (
    <div>
      Sign in page
      <SignInButton />
    </div>
  );
};

export default SignIn;
