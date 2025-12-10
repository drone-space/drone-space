import documents from '@/assets/documents';

export const downloadProfile = () => {
  try {
    const fileUrl = documents.droneSpace.profile;
    window.open(fileUrl, '_blank');
  } catch (error) {
    console.error('Error downloading profile:', error);
  }
};
