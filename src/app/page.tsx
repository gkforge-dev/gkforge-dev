'use client';

import { useState } from 'react';
import Terminal from '@/components/Terminal';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      {!isLoading && <Terminal />}
    </main>
  );
}

