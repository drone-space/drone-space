import { API_URL } from '@repo/constants/paths';
import { FormValuesInquiry } from '@repo/types/form';

export const contactAdd = async (params: Partial<FormValuesInquiry>) => {
  try {
    const response = await fetch(`${API_URL}/email-contacts`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('---> handler error (add email contact):', error);
    throw error;
  }
};
