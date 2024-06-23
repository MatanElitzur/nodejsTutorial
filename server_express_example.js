const express = require('express');
const server = express(); // Create a new express server

server.set('view engine', 'ejs'); // Set the view engine to EJS, this will allow us to render EJS files
//EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

server.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('index'); //render template index of the EJS files residing in the views folder
});

server.get('/about', (req, res) => {
    //res.send('About...');
    res.render('about'); //render template about of the EJS files residing in the views folder
});

server.listen(4242, () => {
    console.log('Express server is running on port 4242');
});