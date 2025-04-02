class Person {
    constructor(name, age) {
        this.name = name;  // Property
        this.age = age;    // Property
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an Object (Instance)
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

person2.greet(); // Output: Hello, my name is John and I am 25 years old.
person2.greet(); // Output: Hello, my name is Alice and I am 30 years old.
