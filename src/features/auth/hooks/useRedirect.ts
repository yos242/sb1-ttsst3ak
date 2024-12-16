import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DELAYS } from '../config/delays';

export function useRedirect() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const redirect = async (to: string, messages: string[]) => {
    setIsRedirecting(true);
    
    for (const msg of messages) {
      setMessage(msg);
      await new Promise(resolve => setTimeout(resolve, DELAYS.ANIMATION));
    }

    navigate(to);
  };

  return {
    isRedirecting,
    redirectMessage: message,
    redirect
  };
}