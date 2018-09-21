'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// UUID
var uuid = require('uuid');
// Set the region
AWS.config.update({region: 'eu-west-2'});
// Create the DynamoDB service object
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

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

/**
 * Handler being called
 */
exports.handler = (event, context, callback) => {

    var contentType = event.headers['Content-Type'] || event.headers['content-type'];

    var bodyData = getBody(cntent, headerz).then(data => {
        console.log(JSON.encode(data));
    })


    // var params = {
    //   TableName: 'pogi_remail',
    //   Item: AWS.DynamoDB.Converter.marshall({
    //     'email_id' : uuid.v1(),
    //     'subject': SUBJECT ? SUBJECT : "No subject",
    //     'event': event, //JSON.parse(event.body);
    //     'email_timestamp' : "timestamp goes here",
    //   })
    // };
    //
    // // Call DynamoDB to add the item to the table
    // dynamodb.putItem(params, function(err, data) {
    //   if (err) {
    //     console.log("Error", err);
    //   } else {
    //     console.log("Success", data);
    //   }
    // });

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
