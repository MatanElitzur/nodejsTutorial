const https = require('https');

// Promises, this function will return a promise object
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

// we use the .then() method to get the data from the promise
fetch('https://www.javascript.com/')
    .then(data => {
        console.log(data.length);
    });

// we can consume any promise with the async/await syntax
(async function read() {
    const data = await fetch('https://www.javascript.com/');
    console.log(data.length)
});