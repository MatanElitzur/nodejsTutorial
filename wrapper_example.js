// Node.js wrappes the code in a function before executing it. This function is called the wrapper function.
//this is the wrapper function is hidden from us, but we can see it by using the exports object, require function, module object, __filename, __dirname
// (function (exports, require, module, __filename, __dirname) {
    //exports = module.exports
    //require = function (path) { /* ... */ }
    //module = { exports: {} }
    //__filename = '/path/to/file.js' --> path to this file
    //__dirname = '/path/to' --> path to the directory of this file
console.log(arguments[0])
let g = 1; //global variable in the wrapper function
exports.a = 42; //exporting a variable, exports is a reference to module.exports
module.exports.b = 37; //exporting a variable

//We the exports to be a function and not an object
module.exports = () => {}; //exporting a function, this will overwrite the previous exports

module.exports = `Hello World`; //exporting a string, this will overwrite the previous exports
module.exports = title => ` //this is a function that inject a title string into the html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
        <h1>${title}</h1>
</body>
</html>
`; //exporting a string, this will overwrite the previous exports
// return module.exports; --> this is the return statement of the wrapper function
// }(module.exports, require, module, __filename, __dirname); //this is how the wrapper function is called by Node.js

//you can test the code "module.exports = title =>" in this file by requiring it in another file 
//like: 
// const wrapper = require('./wrapper_example');
//const myTitle = wrapper('Hello World');
//console.log(myTitle);