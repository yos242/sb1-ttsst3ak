import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface RedirectMessageProps {
  message: string;
}

export function RedirectMessage({ message }: RedirectMessageProps) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <LoadingSpinner className="w-8 h-8 text-[#0070ba] mx-auto" />
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}