const os = require('os');
console.log('OS platform', os.platform());
console.log('OS CPU architecture', os.arch()); // x64, arm, etc.
console.log('# of logical CPU cores', os.cpus().length);
console.log('Home directory for current user', os.homedir());

// create a multi-line string using os.EOL although it is not necessary cause javascript has template strings that can have multi-line strings
console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'line 3');