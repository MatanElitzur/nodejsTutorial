const EventEmitter = require('events'); //it is a build in module
// Streams are EventEmitters
// process.stdin, process.stdout --> are streams so they are EventEmitters too
const eventEmitter = new EventEmitter(); //this is an instance of the EventEmitter class
eventEmitter.emit('TEST_EVENT'); //this is an event that is emitted that will be listened to by the listeners but there are no listeners yet

setImmediate(() => { //this is a function that is called immediately after the current event loop
    eventEmitter.emit('TEST_EVENT'); 
});

eventEmitter.on('TEST_EVENT', () => {   //this is a listener for the event
    console.log('TEST_EVENT was fired');
});

//We can do those on different files and different functions and they will still work on the same event
eventEmitter.on('TEST_EVENT', () => {   //this is a listener for the event
    console.log('TEST_EVENT was fired');
});

eventEmitter.on('TEST_EVENT', () => {   //this is a listener for the event
    console.log('TEST_EVENT was fired');
});

//eventEmitter.emit('TEST_EVENT'); //this is an event that is emitted that will be listened to by the listeners cause there are listeners now