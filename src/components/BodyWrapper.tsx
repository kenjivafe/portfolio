'use client';

import { useEffect } from 'react';

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This ensures the component only renders on the client
  }, []);

  return <>{children}</>;
}
