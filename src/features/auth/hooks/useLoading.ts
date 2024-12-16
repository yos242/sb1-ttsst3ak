import { useState } from 'react';
import { DELAYS } from '../config/delays';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);

  const withLoading = async (fn: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await fn();
      await new Promise(resolve => setTimeout(resolve, DELAYS.LOADING));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    withLoading
  };
}