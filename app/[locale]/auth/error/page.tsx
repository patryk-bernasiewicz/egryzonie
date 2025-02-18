'use client';

import { useEffect, useState } from 'react';

const AuthErrorPage = ({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) => {
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchParams = async () => {
      const { error } = await searchParams;
      setError(error);
    };

    fetchParams();
  }, [searchParams]);

  return <div>Auth error page (actual page), error: {error}</div>;
};

export default AuthErrorPage;
