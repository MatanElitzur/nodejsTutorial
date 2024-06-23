//the global object is the global namespace object in Node.js
//we can access the global object in any file in Node.js
//when we use setTimeout, setInterval, setImmediate, or console.log, we are actually calling global.setTimeout, global.setInterval, global.setImmediate, global.console.log
//as devevelopers it is not necessary and wrong to use the global object, but it is good to know that it is there 
console.log(global, {depth: 0})



