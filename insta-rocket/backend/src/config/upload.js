/* Multer is a node.js middleware for handling multipart/form-data, which is primarily
used for uploading files. It is written on top of busboy for maximum efficiency.
NOTE: Multer will not process any form which is not multipart (multipart/form-data).
https://www.npmjs.com/package/multer
*/
const multer = require('multer');

// The path module provides utilities for working with file and directory paths.
// https://nodejs.org/docs/latest/api/path.html
const path = require('path');

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
