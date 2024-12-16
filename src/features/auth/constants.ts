export const AUTH_MESSAGES = {
  OTP: {
    TITLE: 'Saisir votre code',
    DESCRIPTION: 'Nous avons envoyé un code de sécurité',
    RESEND: 'Envoyer un nouveau code',
    MORE_OPTIONS: 'Besoin d\'autres options ?',
    BACK: 'Retour',
    SUBMIT: 'Envoyer'
  },
  LOGIN: {
    TITLE: 'PayPal',
    SUBTITLE: 'Connectez-vous à votre compte',
    FORGOT_PASSWORD: 'Mot de passe oublié ?',
    SUBMIT: 'Connexion',
    CREATE_ACCOUNT: 'Ouvrir un compte',
    OR: 'ou'
  },
  ERRORS: {
    EMAIL_REQUIRED: 'Veuillez saisir votre email',
    EMAIL_INVALID: 'L\'adresse email n\'est pas valide',
    PASSWORD_REQUIRED: 'Veuillez saisir votre mot de passe',
    OTP_INVALID: 'Le code de sécurité n\'est pas valide',
    GENERIC: 'Une erreur est survenue. Veuillez réessayer.'
  },
  LOADING: {
    LOGIN: 'Connexion en cours...',
    VERIFY: 'Vérification...',
    REDIRECT: 'Redirection vers votre compte PayPal...'
  }
} as const;