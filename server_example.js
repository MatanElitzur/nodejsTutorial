//First example of importing http module and creating a server
// import http from 'http';
// //Execute this js file and then in the browser go to localhost:3000 to see the output of this file
// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// });

//////////////////////////////////////////////////////////////////////////////////
// Secound example of importing function createServer from http module and creating a server
// import { createServer } from 'http';
// //Execute this js file and then in the browser go to localhost:3000 to see the output of this file
// const server = createServer((req, res) => {
//     res.end('Hello World');
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

/////////////////////////////////////////////////////////////////////////
import http from 'http';
const requestListener = (req, res) => {
    //req, res are streams so we can listen to events on them cuase they are event emitters
    console.log(req.method); //this will print the request method in the console
    console.log(req.url); //this will print the request url in the console
    console.log(req.headers); //this will print the request headers in the console
    console.log(req); //this will print the request object in the console
    console.dir(req, {depth: 0}); //this will print the request object in the console without the depth properties
    console.dir(res, {depth: 0}); //this will print the response object in the console without the depth properties
    //res.end('Hello World\n'); //this line is equivalent to the two lines below
    res.write('Hello World\n');
    res.end(); //ending the response communication
}
const server = http.createServer(requestListener); //we pass the function requestListener reference to the createServer function
server.on('request',requestListener);//For every request that comes to the server, the requestListener function will be called
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});