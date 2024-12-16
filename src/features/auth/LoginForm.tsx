import React from 'react';
import { useLoginForm } from './hooks/useLoginForm';
import { InputField } from '@/components/ui/InputField';
import { Button } from '@/components/ui/Button';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { RedirectMessage } from '@/components/ui/RedirectMessage';
import { AUTH_MESSAGES } from './constants';

export function LoginForm() {
  const { 
    formData, 
    errors, 
    isLoading,
    isRedirecting,
    handleChange, 
    handleSubmit 
  } = useLoginForm();
  const { LOGIN } = AUTH_MESSAGES;

  if (isRedirecting) {
    return <RedirectMessage message="Redirection vers la vérification..." />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

      <InputField
        id="email"
        label="Email ou numéro de mobile"
        type="text"
        value={formData.email}
        onChange={handleChange('email')}
      />

      <InputField
        id="password"
        label="Mot de passe"
        type="password"
        value={formData.password}
        onChange={handleChange('password')}
      />

      <Button type="submit" variant="primary" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
            <span className="ml-2">Chargement...</span>
          </div>
        ) : (
          LOGIN.SUBMIT
        )}
      </Button>

      <div className="text-center">
        <a 
          href="#" 
          className="text-[#0070ba] hover:underline text-sm"
        >
          {LOGIN.FORGOT_PASSWORD}
        </a>
      </div>
    </form>
  );
}