const fs = require('fs');
const path = require('path');
const { UPLOAD_DIR } = require('@app/utils/constants');
const { randomUUID } = require('crypto');

const storeFS = ({ stream, filename }) => {
  const uploadDir = UPLOAD_DIR;
  const fileExtn = filename.split('.').pop();
  const newFilename = `${randomUUID()}.${fileExtn}`;
  const location = path.join(uploadDir, newFilename);

  return new Promise((resolve, reject) =>
    stream
      .on('error', (error) => {
        if (stream.truncated) fs.unlinkSync(location);
        reject(error);
      })
      .pipe(fs.createWriteStream(location))
      .on('error', (error) => reject(error))
      .on('finish', () => resolve({ newFilename, uploadDir }))
  );
};

module.exports = { storeFS };
