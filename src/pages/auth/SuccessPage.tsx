import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function SuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.paypal.com/signin';
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AuthLayout>
      <div className="text-center space-y-4">
        <LoadingSpinner className="w-8 h-8 text-[#0070ba] mx-auto" />
        <p className="text-gray-600">Redirection vers PayPal...</p>
      </div>
    </AuthLayout>
  );
}