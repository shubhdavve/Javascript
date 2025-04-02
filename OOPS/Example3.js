class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.breed} barks!`);
    }
}

// Creating an Object
const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy barks!
