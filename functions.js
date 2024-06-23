function today() {
    return new Date();
}

function dynamicArgsFunction() {
    console.log(arguments);
}
dynamicArgsFunction(1, 2, 3, 4, 5);

function mainFunc() {
    console.log(today());
    console.log("Hello World!");
}

module.exports = {mainFunc, today};

//////////////////////////////////////////
//Arrow functions
//////////////////////////////////////////
const square = (x) => {
    return x * x;
}
// if the arrow function has only one line we can type it like that
const square1 = (a) => a * a;
// if we get only one argument we can remove the parentheses
const square2 = a => a * a;

[1,2,3,4].map(a => a * a); // [1, 4, 9, 16

const X = function() {
    //"this" here is the caller of X
    console.log("Hello World!");
};

const Y = () => {   
 //"this" here is NOT the caller of Y
 //It's the same "this" found in Y's scope
};

this.id = "exports";
console.log(this); // exports

const testerObj = {
    func1: function() {
        console.log('In func1', this);
    },
    func2: () => {
        console.log('In func2', this);
    }
}

testerObj.func1(); // { func1: [Function: func1], func2: [Function: func2] }
//testerObj.func1() with the function keyword, is associated with the caller the object testerObj
testerObj.func2(); // { id: 'exports' }
//testerObj.func2() with the arrow function, is associated with the "this" where we defined this.id = "exports"; 

//Example of object with methods
const obj = {
    id: '123',
    printThis: function() {
        console.log(this);
    },
    printThisArrow: () => {
        console.log(this);
    }
};

//Example of object with methods
const mystery = 'answer';
const PI = Math.PI;
const obj1 = {  
    p1: 10,
    p2: 20,
    f1() {
        console.log(this.p1, this.p2);
    },
    f2: () => {
        console.log(this.p1, this.p2);
    },
    [mystery]: 30,
    PI,
};
//obj1.answer --> Output: 30