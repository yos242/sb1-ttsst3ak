export const VALIDATION_RULES = {
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MIN_LENGTH: 3,
    MAX_LENGTH: 254
  },
  OTP: {
    LENGTH: 6,
    PATTERN: /^\d{6}$/
  }
} as const;