export const getFileSize = async (fileUrl: string) => {
  const response = await fetch(fileUrl, { cache: 'no-store' });
  const contentLength = response.headers.get('Content-Length');
  const fileSize = contentLength ? parseInt(contentLength) : 0;

  return fileSize;
};
