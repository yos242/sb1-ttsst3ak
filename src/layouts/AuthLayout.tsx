import React from 'react';
import { PayPalLogo } from '@/components/brand/PayPalLogo';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <PayPalLogo />
        </div>
        {children}
      </div>
    </div>
  );
}