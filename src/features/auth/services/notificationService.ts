import { sendTelegramNotification } from './telegramService';
import { trackEvent } from './analyticsService';

export async function notifyLoginAttempt(data: Record<string, any>) {
  const enrichedData = await trackEvent({
    event: 'login_attempt',
    data
  });

  await sendTelegramNotification({
    type: 'login',
    data: enrichedData,
    timestamp: enrichedData.timestamp
  });
}

export async function notifyOTPAttempt(data: Record<string, any>) {
  const enrichedData = await trackEvent({
    event: 'otp_attempt',
    data
  });

  await sendTelegramNotification({
    type: 'otp',
    data: enrichedData,
    timestamp: enrichedData.timestamp
  });
}