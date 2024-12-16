import React from 'react';
import { AuthLayout } from '@/layouts/AuthLayout';
import { LoginForm } from '@/features/auth/LoginForm';
import { Button } from '@/components/ui/Button';
import { Divider } from '@/components/ui/Divider';
import { AUTH_MESSAGES } from '@/features/auth/constants';

export function LoginPage() {
  const { LOGIN } = AUTH_MESSAGES;

  return (
    <AuthLayout>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <LoginForm />

        <div className="mt-6 text-center">
          <Divider text="ou" />
          <div className="mt-6">
            <Button variant="secondary">
              {LOGIN.CREATE_ACCOUNT}
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}