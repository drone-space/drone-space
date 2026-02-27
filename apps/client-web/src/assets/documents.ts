import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';

const baseUrl = `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/documents`;

const documents = {
  droneSpace: {
    brochure: `${baseUrl}/drone-space/brochure.pdf`,
    profile: `${baseUrl}/drone-space/profile.pdf`,
  },
};

export default documents;
