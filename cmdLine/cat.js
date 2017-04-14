'use strict';

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function fileFound (err, data) {
    if (err) return console.error(err);
    console.log(data);
});