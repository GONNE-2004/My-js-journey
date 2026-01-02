//Difference between primitive and object types in JavaScript
/* Primitive types:
- Number, String, Boolean, Null, Undefined, Symbol, BigInt

Characteristics of primitive types:
- Immutable: Their values cannot be changed once created.
- Stored directly in the variable.
- Compared by value.

Example of primitive types:
*/
let num1 = 42; // Number
console.log(typeof num1); // Output: number

/* Object types:
- Object, Array, Function, Date, RegExp, Map, Set

Characteristics of object types:
- Mutable: Their properties can be changed after creation.
- Stored as references in variables.
- Compared by reference.

When objects are assigned to a new variable, the reference (memory address) is copied, not the actual object.
Therefore, changes made through one reference will affect the other.
Example of object types:
*/
let obj1 = { name: "John", age: 30 }; // Object
let obj2 = obj1; // Copying the reference

console.log(typeof obj1); // Output: object

// Modifying the object through obj2
obj2.age = 31;

console.log(obj1.age); // Output: 31 (obj1 is affected because obj2 references the same object)

// To create a true copy of an object, you can use methods like Object.assign() or the spread operator.
let obj3 = { ...obj1 }; // Creating a shallow copy using spread operator
obj3.age = 25;

console.log(obj1.age); // Output: 31 (obj1 remains unchanged)
console.log(obj3.age); // Output: 25 (obj3 is a separate copy)

/* Summary:
- Primitive types are immutable and compared by value.
- Object types are mutable and compared by reference.
- Assigning an object to a new variable copies the reference, not the object itself.
- Use methods like Object.assign() or the spread operator to create true copies of objects.
*/


//Diference between function and object methods in JavaScript
/* Functions:
- A function is a standalone block of code designed to perform a specific task.
- It can be called independently and can accept parameters and return values.
- Functions are defined using the function keyword or arrow function syntax.

Example of a function:
*/
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

/* Object Methods:
- An object method is a function that is a property of an object.
- It is called on the object it belongs to and can access the object's properties using the "this" keyword.
- Object methods are defined as properties of an object.

Example of an object method:
*/
const calculator = {
    value: 0,
    add: function (a) {
        this.value += a;
        return this.value;
    },
    subtract: function (a) {
        this.value -= a;
        return this.value;
    }
};

console.log(calculator.add(5)); // Output: 5
console.log(calculator.subtract(2)); // Output: 3

/* Summary:
- Functions are standalone blocks of code that can be called independently.
- Object methods are functions that belong to an object and can access the object's properties using "this".
- Functions can be reused across different contexts, while object methods are tied to their specific objects.
*/

//What's object constructor and when to use it in JavaScript
/* An object constructor is a special type of function used to create and initialize objects in JavaScript.
It serves as a blueprint for creating multiple instances of similar objects with shared properties and methods.

When to use an object constructor:
- When you need to create multiple objects with the same structure and behavior.
- When you want to encapsulate related properties and methods within a single entity.
- When you want to implement inheritance and create object hierarchies.
- When you want to create an object wrapper for primitives or other data types.

Example of an object constructor:
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating instances of the Person object using the constructor
const person1 = new Person("Alice", 28);
const person2 = new Person("Bob", 35);

person1.greet(); // Output: Hello, my name is Alice and I am 28 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 35 years old.

/* Summary:
- Object constructors are used to create multiple instances of similar objects.
- They encapsulate related properties and methods.
- They facilitate inheritance and object hierarchies.
- Use them when you need a structured way to create and manage objects in your code.
*/