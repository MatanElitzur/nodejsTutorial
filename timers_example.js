//example of setTimeout function with an inline function as a first argument 
setTimeout(() => {
  console.log('Hello after 3 seconds');
}   , 3000);

//example of setTimeout function with a function as a first argument
const func = () => {
  console.log('Hello after 5 seconds');
}
setTimeout(func, 5000);

//example of setTimeout function with a function as a first argument and passing arguments to the function
//who is a parameter of the function rocks
const rocks = who => {
  console.log(who + ' rocks');
}
setTimeout(rocks, 2000, 'Node.js');

//example of setInterval function, we must kill the process to stop the interval with ctrl+c
setInterval(() => {
    console.log('Hello every 5 seconds');
}, 5000);

//example of clearInterval function, we must kill the process to stop the interval with ctrl+c
//This code should print immediately after Zero seconds but it want print anything because we clearTimeout
const timerId = setTimeout(() => {
  console.log('You will not see this one!');
}   , 0);
clearTimeout(timerId);

//example of setInterval function with clearInterval function that has acounter and stops the interval after counter is 5
let counter = 0;
const intervalId = setInterval(() => {
  console.log('Hello World');
  counter += 1;

  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);

// process exist after the 2 seconds timeout is done
setTimeout(() => process.exit(), 2000);
process.on('exit', () => { //this is an event listener that listens for the exit event of the process
  console.log('Goodbye!');
});
console.log('Hello!'); //this will be printed first because it is synchronous code
