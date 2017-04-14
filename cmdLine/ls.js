'use strict';

let fs = require('fs');

let filter = process.argv[3];
let filterArg = process.argv[4];
let folderPath = process.argv[2];

fs.readdir(folderPath, function printFiles(err, files) {
    if (err) return console.error(err);
    files.forEach(function (file) {
        if (filter) {
            if (filter === '-in') {
                if (file.indexOf(filterArg) === -1) {
                    return;
                }
            }
            else if (filter === '-end') {
                if (file.lastIndexOf(filterArg) !== file.length - filterArg.length) {
                    return;
                }
            }
        }
        console.log(file);
    });
});