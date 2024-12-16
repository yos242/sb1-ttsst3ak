import React from 'react';
import { AuthLayout } from '@/layouts/AuthLayout';
import { OTPForm } from '@/features/auth/OTPForm';

export function OTPPage() {
  return (
    <AuthLayout>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <OTPForm />
      </div>
    </AuthLayout>
  );
}