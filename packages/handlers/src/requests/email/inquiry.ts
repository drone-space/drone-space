import { getClientApiUrl, HEADERS } from '@repo/constants';
import { FormValuesInquiry } from '@repo/types';

const baseRequestUrl = `${getClientApiUrl()}/inquiry`;

export const handleInquiry = async (formData: FormValuesInquiry) => {
  try {
    const request = new Request(baseRequestUrl, {
      method: 'POST',
      headers: HEADERS.WITH_BODY,
      body: JSON.stringify(formData),
    });

    const response = await fetch(request, { next: { revalidate: 3600 } });

    return response;
  } catch (error) {
    console.error('---> handler error - (send inquiry):', error);
    throw error;
  }
};
