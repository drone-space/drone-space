import { Subscribe } from '@/types/mail-handler';

export const addSubscriber = async (formData: Subscribe) => {
  try {
    const now = new Date();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MAILERLITE_API_URL}/subscribers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_MAILERLITE_KEY_GENERAL}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          fields: {
            name: formData.fname,
            last_name: formData.lname,
            company: formData.company,
            phone: formData.phone,
          },
          groups: [process.env.NEXT_MAILERLITE_GROUP_GENERAL],
          status: 'active',
          subscribed_at: now.toISOString().replace('T', ' ').slice(0, 19),
          opted_in_at: now.toISOString().replace('T', ' ').slice(0, 19),
        }),
      }
    );

    return response;
  } catch (error) {
    console.error('---> handler error (add subscriber):', error);
    throw error;
  }
};
