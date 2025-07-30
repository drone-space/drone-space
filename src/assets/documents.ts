import { HOSTED_BASE_URL } from '@/data/constants';

const baseUrl = `${HOSTED_BASE_URL.DEFAULT}/documents`;

const documents = {
  droneSpace: {
    brochure: `${baseUrl}/drone-space/brochure.pdf`,
    profile: `${baseUrl}/drone-space/profile.pdf`,
  },
};

export default documents;
