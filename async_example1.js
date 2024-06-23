const fs = require('fs');
const data = fs.readFileSync(__filename, 'utf-8');
console.log('File data is',data);
console.log('TEST1');
////////////////////////////////////////////////////////////////////////////////////////////////
fs.readFile(__filename, 'utf-8', function cb(err, data) {
    console.log('File data is', data);
}  );
console.log('TEST2');
////////////////////////////////////////////////////////////////////////////////////////////////
//Nested callbacks
fs.readFile(__filename, 'utf-8', function cb1(err, data) {
    fs.writeFile(__filename + '.copy', data, function cb2(err) {
        // Nest more callbacks here...
    });
});
console.log('TEST3');
////////////////////////////////////////////////////////////////////////////////////////////////
const util = require('util');
const { a } = require('./wrapper_example');
const readFile4 = util.promisify(fs.readFile); //convert the readFile function to a promise
async function main() {
    const data = await readFile4(__filename, 'utf-8'); //now we can use the async/await syntax for the readFile function
    console.log('File data is', data);
}
main();
console.log('TEST4');
////////////////////////////////////////////////////////////////////////////////////////////////
const { readFile } = require('fs').promises; //we can use the promises API directly just for the readFile function
async function main5() {
    const data = await readFile(__filename, 'utf-8'); //now we can use the async/await syntax for the readFile function
    console.log('File data is', data);
}
main5();
console.log('TEST5');
////////////////////////////////////////////////////////////////////////////////////////////////
const fs6 = require('fs').promises; //we can use the promises API directly for all the fs functions
async function main6() {
    const data = await fs6.readFile(__filename, 'utf-8'); //now we can use the async/await syntax for the readFile function
    await fs6.writeFile(__filename + '.copy6', data);
    console.log('File data is', data);
    // More callbacks here...
}
main6();
console.log('TEST6');


