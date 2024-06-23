{
    // Block scope
}

if (true) {
    // Block scope
}

//Scalar values
const answer = 42; // const makes the variable immutable
const greeting = 'Hello';
//answer = 50 // TypeError: Assignment to constant variable.
//Arrays and Objects
const numbers = [2, 4, 6];
const person = {
    firstName: 'John',
    lastName: 'Doe'
};
numbers[0] = 70; // This is allowed, const does not make the array immutable

// for (let i = 0; i < 10; i++) {
//     // let has block scope
//     // const has block scope
//     // Block scope
// }
// console.log('i:' + i); // ReferenceError: i is not defined cause of the let

for (var i = 0; i < 10; i++) {
    // var i does not have block scope
    // Block scope
}
console.log('i:' + i); // will print i:10

function sum(a, b) {
    // Function scope
    return a + b;
}   

sum(1, 2); // 3