import type { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }

  return children;
};

export default AuthLayout;
