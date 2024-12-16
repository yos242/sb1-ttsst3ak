import { LoginFormData } from '../types';
import { VALIDATION_RULES } from '../config/validation';
import { AUTH_MESSAGES } from '../constants';

const { EMAIL } = VALIDATION_RULES;
const { ERRORS } = AUTH_MESSAGES;

export const validateLoginForm = (data: LoginFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.email) {
    errors.push(ERRORS.EMAIL_REQUIRED);
  } else if (!EMAIL.PATTERN.test(data.email)) {
    errors.push(ERRORS.EMAIL_INVALID);
  }
  
  if (!data.password) {
    errors.push(ERRORS.PASSWORD_REQUIRED);
  }
  
  return errors;
};

export const validateOTP = (otp: string): boolean => {
  return VALIDATION_RULES.OTP.PATTERN.test(otp);
};