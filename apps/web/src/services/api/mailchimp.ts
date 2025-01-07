import { API_URL } from '@/data/constants';
import { Subscribe } from '@/types/mailchimp';

export const addSubscriber = async (params: Subscribe) => {
  try {
    const response = await fetch(`${API_URL}/mailchimp`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allows requests from any origin
        Accept: 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('---> service error (add subscriber):', error);
    throw error;
  }
};
