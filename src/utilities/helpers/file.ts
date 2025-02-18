import path from 'path';
import fs from 'fs/promises'; // Node.js file system module

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
