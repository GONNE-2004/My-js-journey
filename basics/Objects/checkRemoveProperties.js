//There are 3 ways to check if a property exists in an object and to remove it
/* 1. The "in" operator
   2. The "hasOwnProperty" method
   3. The "undefined" check

To remove a property from an object, you can use the "delete" operator or destructuring.

Example: */

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// 1. Using the "in" operator
console.log("make" in car); // Output: true
console.log("color" in car); // Output: false

// 2. Using the "hasOwnProperty" method
console.log(car.hasOwnProperty("model")); // Output: true
console.log(car.hasOwnProperty("color")); // Output: false

// 3. Using the "undefined" check
console.log(car.year !== undefined); // Output: true
console.log(car.color !== undefined); // Output: false

// Removing a property using the "delete" operator
delete car.year;
console.log(car); // Output: { make: 'Toyota', model: 'Camry' }
// Removing a property using destructuring
const { model, ...updatedCar } = car;
console.log(updatedCar); // Output: { make: 'Toyota' }

//Note: destructuring creates a new object without the specified property, while the delete operator modifies the original object.