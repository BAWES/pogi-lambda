'use strict';


// Function to Get Form Body
var Busboy = require('busboy');
var YError = require('yerror');
var getRawBody = require('raw-body');
const getBody = (content, headers) => new Promise((resolve, reject) => {
  const filePromises = [];
  const data = {};
  const parser = new Busboy({'headers': headers});


  parser.on('field', (name, value) => {
    data[name] = value;
  });
  parser.on('file', (name, file, filename, encoding, mimetype) => {
    data[name] = {
      filename,
      encoding,
      mimetype,
    };
    filePromises.push(
      getRawBody(file).then(rawFile => (data[name].content = rawFile))
    );
  });
  parser.on('error', err => reject(YError.wrap(err)));
  parser.on('finish', () =>
    resolve(Promise.all(filePromises).then(() => data))
  );
  parser.write(content);
  parser.end();
});


exports.handler = (event, context, callback) => {

  // Get POST requests received via SendGrid
  let SUBJECT = event['subject'];

    var response = {
        "statusCode": 200,
        "body": "success",
        "isBase64Encoded": false,
        "headers": {
            "my_header": "my_value"
        }
    };
    callback(null, response);
};
