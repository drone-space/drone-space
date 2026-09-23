import { documents } from '@repo/constants';

export const downloadBrochure = () => {
  try {
    const fileUrl = documents.droneSpace.brochure;
    window.open(fileUrl, '_blank');
  } catch (error) {
    console.error('Error downloading brochure:', error);
  }
};
