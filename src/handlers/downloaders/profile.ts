import documents from '@/assets/documents';

export const downloadProfile = async () => {
  try {
    const response = await fetch(documents.droneSpace.profile);
    const blob = await response.blob();

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'profile.pdf'; // Replace with the desired file name

    // Append the link to the body (this is required for some browsers)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after triggering the download
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading profile:', error);
  }
};
