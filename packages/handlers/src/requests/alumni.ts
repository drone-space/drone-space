import { getClientApiUrl } from '@repo/constants';
import { AlumniChallengerGet } from '@repo/types';

export const alumniChallengeSubmit = async (params: Partial<AlumniChallengerGet>) => {
  try {
    const response = await fetch(`${getClientApiUrl()}/alumni-challengers/${params.srpl}`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return response;
  } catch (error) {
    console.error('---> handler error (challenge submitted):', error);
    throw error;
  }
};
