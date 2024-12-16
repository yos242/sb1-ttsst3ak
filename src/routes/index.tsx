import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '@/pages/auth/LoginPage';
import { OTPPage } from '@/pages/auth/OTPPage';
import { SuccessPage } from '@/pages/auth/SuccessPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/verify',
    element: <OTPPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  }
]);