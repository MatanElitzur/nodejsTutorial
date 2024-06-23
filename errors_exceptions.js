//Error is a problem that arises during the execution of a program. Exception is a condition that a program should catch and handle.
const fs = require('fs');
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

files.forEach(file => {
    try {
        const data = fs.readFileSync(file, 'utf-8');
        console.log('File data is ', data);
    } catch (err) { //it is a dangerous practice to catch all errors, for example if the file not exsists or if there is a problem to read the file
        if (err.code === 'ENOENT') {
            console.log('File not found!');
        } else {
           throw err; //this will stop the program and show the error
        }
    }
});