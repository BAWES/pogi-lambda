'use strict';

exports.handler = (event, context, callback) => {

    // Function to Get Form Body
    var Busboy = require('busboy');
    var YError = require('yerror');
    var getRawBody = require('raw-body');

    const busboy = new Busboy({
    		        headers: {
    		            'content-type': 'text/plain',
    		        }
    		    });


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
