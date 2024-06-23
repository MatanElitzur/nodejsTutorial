//Every this is an object in JavaScript
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class student extends person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

const o1 = new person("Max");
const o2 = new student("Tina", "1st Grade");
const o3 = new student("Mary", "2nd Grade");

a3.greet = () => console.log('I am special!'); // we can override the greet method of the object a3
a1.greet(); // output: Hello Max
a2.greet(); // output: Hello Tina from 1st Grade
a3.greet(); // output: I am special!