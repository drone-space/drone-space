import { API_URL } from '@repo/constants/paths';
import { AlumniChallengerGet } from '@repo/types/models/alumni-challenger';

export const alumniChallengeSubmit = async (params: Partial<AlumniChallengerGet>) => {
  try {
    const response = await fetch(`${API_URL}/alumni-challengers/${params.srpl}`, {
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
