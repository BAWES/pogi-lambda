'use strict';


// Function to Get Form Body
var Busboy = require('busboy');
var YError = require('yerror');
var getRawBody = require('raw-body');

const busboy = new Busboy({
		        headers: {
		            'content-type': 'text/plain',
		        }
		    });

console.log(busboy);
