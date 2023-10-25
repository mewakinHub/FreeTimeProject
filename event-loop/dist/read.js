"use strict";

var _fs = require("fs");
var readStream = (0, _fs.createReadStream)('filewritten.txt');
readStream.on('data', function (data) {
  console.log('Data => ', data.toString());
});

// readStream.close();
readStream.on('finish', function () {
  console.log('Data has been read from filewritten.txt');
});