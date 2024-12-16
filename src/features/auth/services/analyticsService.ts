import { getUserIP } from '../utils/network';

interface AnalyticsData {
  event: string;
  data: Record<string, any>;
}

export async function trackEvent(eventData: AnalyticsData) {
  const ip = await getUserIP();
  const enrichedData = {
    ...eventData.data,
    ip,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  };

  // Log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', {
      event: eventData.event,
      data: enrichedData
    });
  }

  return enrichedData;
}