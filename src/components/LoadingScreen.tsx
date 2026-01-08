'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState('Initializing system');
  const [dots, setDots] = useState('');

  useEffect(() => {
    const texts = [
      'Initializing system',
      'Loading modules',
      'Connecting to server',
      'Establishing secure connection',
      'Ready'
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex++;
      if (textIndex < texts.length) {
        setLoadingText(texts[textIndex]);
      }
    }, 400);

    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 300);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearInterval(textInterval);
      clearInterval(dotInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">{loadingText}{dots}</div>
      <div className="loading-bar">
        <div className="loading-progress" />
      </div>
      <div className="loading-dots">
        <div className="loading-dot" />
        <div className="loading-dot" />
        <div className="loading-dot" />
      </div>
    </div>
  );
}

