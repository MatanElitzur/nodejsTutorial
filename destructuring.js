//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

//Destructuring - the same as above
const {PI, E, SQRT2} = Math;

//with require
//const {readFile} = require('fs');

const circle = {
    label: 'circleX',
    radius: 2,
};

//Destructuring the default value of precision is 2
const circleArea = ({radius}, {precision = 2} = {}) =>
    (PI * radius * radius).toFixed(precision);  

console.log(circleArea(circle));
console.log(circleArea(circle, {precision: 5}));

const [first,second,,forth] = [10,20,30,40];
const [firstNum, ...restOfItems] = [10,20,30,40]; // output: firstNum = 10, restOfItems = [20,30,40]

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const {temp1, temp2, ...person} = data; // output: temp1 = '001', temp2 = '002', person = {firstName: 'John', lastName: 'Doe'}

const newArrray = [...restOfItems]; // output: [20,30,40]

const newObject = { ...person }; // output: {firstName: 'John', lastName: 'Doe'}