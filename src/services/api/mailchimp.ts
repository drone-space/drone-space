import { API_URL } from '@/data/constants';
import { Subscribe } from '@/types/mailchimp';

export const addSubscriber = async (params: Subscribe) => {
  try {
    const response = await fetch(`${API_URL}/mailchimp`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include', // Add this if you need to send cookies
    });

    return response;
  } catch (error) {
    console.error('---> service error (add subscriber):', error);
    throw error;
  }
};
