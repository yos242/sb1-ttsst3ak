import { AuthError } from '../types';
import { AUTH_MESSAGES } from '../constants';

export function createError(field: string, message: string): AuthError {
  return { field, message };
}

export function getErrorMessage(error: AuthError): string {
  return AUTH_MESSAGES.ERRORS[error.message as keyof typeof AUTH_MESSAGES.ERRORS] || 
    AUTH_MESSAGES.ERRORS.GENERIC;
}