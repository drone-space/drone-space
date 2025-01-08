import documents from '@/assets/documents';

export const downloadBrochure = async () => {
  try {
    const response = await fetch(documents.droneSpace.brochure); // Replace with your file URL
    const blob = await response.blob();

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'brochure.pdf'; // Replace with the desired file name

    // Append the link to the body (this is required for some browsers)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after triggering the download
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading brochure:', error);
  }
};
