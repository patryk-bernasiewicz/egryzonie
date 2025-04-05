'use client';
import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type AuthWrapperProps = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => (
  <SessionProvider>{children}</SessionProvider>
);

export default AuthWrapper;
