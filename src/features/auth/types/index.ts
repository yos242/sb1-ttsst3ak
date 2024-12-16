export interface LoginFormData {
  email: string;
  password: string;
}

export interface OTPFormData {
  otp: string;
}

export interface AuthError {
  field: string;
  message: string;
}