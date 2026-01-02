//What's optional chaining operator and destructuring in JavaScript
/* Optional Chaining Operator (?.):
- The optional chaining operator allows you to safely access nested object properties without having to check if each reference in the chain is valid.
- If any reference in the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

Example: */
const user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

console.log(user.address?.street); // Output: "123 Main St"
console.log(user.contact?.phone); // Output: undefined (no error thrown)

/* Destructuring:
- Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
- It provides a concise way to extract multiple properties from an object.

Example of object destructuring: */
const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};

const { firstName, age } = person;
console.log(firstName); // Output: "Jane"
console.log(age); // Output: 28

/* Example of array destructuring: */
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

/* Summary:
- The optional chaining operator (?.) helps safely access nested properties without errors.
- Destructuring allows for easy extraction of values from objects and arrays into variables.
*/