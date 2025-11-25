import { HOSTED_BASE_URL } from '@repo/constants/paths';

const baseUrl = `${HOSTED_BASE_URL.CLIENT_WEB}/documents`;

const documents = {
  droneSpace: {
    brochure: `${baseUrl}/drone-space/brochure.pdf`,
    profile: `${baseUrl}/drone-space/profile.pdf`,
  },
};

export default documents;
