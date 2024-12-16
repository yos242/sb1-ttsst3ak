import React from 'react';
import { useOTPForm } from './hooks/useOTPForm';
import { OTPInput } from '@/components/ui/OTPInput/OTPInput';
import { Button } from '@/components/ui/Button';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { RedirectMessage } from '@/components/ui/RedirectMessage';
import { ArrowLeft } from 'lucide-react';
import { AUTH_MESSAGES } from './constants';
import { PAYPAL_COLORS } from './config/colors';

export function OTPForm() {
  const { 
    otp, 
    error,
    isLoading,
    isRedirecting,
    redirectMessage,
    setOTP, 
    handleSubmit, 
    handleBack 
  } = useOTPForm();
  const { OTP } = AUTH_MESSAGES;

  if (isRedirecting) {
    return <RedirectMessage message={redirectMessage} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center text-[#0070ba] hover:underline mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        {OTP.BACK}
      </button>

      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          {OTP.TITLE}
        </h1>
        <p className="text-sm text-gray-600">
          {OTP.DESCRIPTION}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm text-center">
          {error}
        </div>
      )}

      <OTPInput 
        value={otp} 
        onChange={setOTP}
        length={6}
      />

      <Button 
        type="submit" 
        variant="primary" 
        disabled={isLoading}
        className={`bg-${PAYPAL_COLORS.PRIMARY}`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <LoadingSpinner />
            <span className="ml-2">{AUTH_MESSAGES.LOADING.VERIFY}</span>
          </div>
        ) : (
          OTP.SUBMIT
        )}
      </Button>

      <div className="text-center space-y-4">
        <a 
          href="#" 
          className={`text-${PAYPAL_COLORS.TEXT.LINK} hover:underline text-sm block`}
        >
          {OTP.RESEND}
        </a>
        <a 
          href="#" 
          className={`text-${PAYPAL_COLORS.TEXT.LINK} hover:underline text-sm block`}
        >
          {OTP.MORE_OPTIONS}
        </a>
      </div>
    </form>
  );
}