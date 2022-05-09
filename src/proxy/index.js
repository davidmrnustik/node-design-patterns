// const fs = require('fs');
const path = require('path');

const FS_Proxy = require('./FS_Proxy');

const fs = new FS_Proxy(require('fs'));

const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {
    if (error) {
        console.log('\x07'); // beep (ding) sound
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);
}

fs.readFile(txtFile, 'utf-8', result);
fs.readFile(mdFile, 'utf-8', result);