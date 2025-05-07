import path from 'path';
import fs from 'fs/promises'; // Node.js file system module

export const getFileSize = async (fileUrl: string) => {
  const response = await fetch(fileUrl);
  const contentLength = response.headers.get('Content-Length');
  const fileSize = contentLength ? parseInt(contentLength) : 0;

  return fileSize;
};

export const getFileContent = async (params: {
  directory: string;
  file: string;
  encoding: BufferEncoding;
}) => {
  const filePath = path.join(process.cwd(), params.directory, params.file);
  const documentContent = await fs.readFile(filePath, {
    encoding: params.encoding,
  });
  return documentContent;
};
