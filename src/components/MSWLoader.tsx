import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import initMSW from '@/mocks';

export default function MSWLoader({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initMSW().then(() => setIsReady(true));
  }, []);

  if (!isReady) {
    return <div>로딩 중...</div>;
  }

  return <>{children}</>;
}
