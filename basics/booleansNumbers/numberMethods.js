// let's see how Nan works in JavaScript
const notANumber1 = 0 / 0;
console.log(`0 divided by 0 is: ${notANumber1}`); // NaN

const notANumber2 = Math.sqrt(-1);
console.log(`Square root of -1 is: ${notANumber2}`); // NaN

console.log(NaN === NaN); // false

/*to check if a value is NaN, we use the isNaN() function*/
const value1 = "Hello" - 5;
console.log(`Is "Hello" - 5 NaN? ${isNaN(value1)}`); // true
// but we have to be careful because isNaN() converts the value to number first
// before checking if it's NaN

const value2 = "123";
console.log(`Is "123" NaN? ${isNaN(value2)}`); // false because "123" is converted to 123

// so the better way to check for NaN is to use Number.isNaN() which doesn't
// perform type coercion

// console.log(`Is "Hello" - 5 NaN? ${Number.isNaN(value1)}`); // true
// console.log(`Is "123" NaN? ${Number.isNaN(value2)}`); // false

/*
  In this code, we demonstrate how NaN (Not-a-Number) behaves in JavaScript.
  We show that NaN is not equal to itself and how to properly check for NaN
  using the Number.isNaN() function to avoid issues with type coercion.

*/




// how does parseInt and parseFloat handle invalid numbers
const invalidInt = parseInt("Hello123");
console.log(`parseInt("Hello123") = ${invalidInt}`); // NaN

const invalidFloat = parseFloat("World45.67");
console.log(`parseFloat("World45.67") = ${invalidFloat}`); // Nan
/* parseInt and parseFloat return NaN when they cannot parse a valid number
 from the beginning of the string. This is useful to know when dealing with
 user input or data that may not be in the expected format.

 if there are more than 1 decimal points in the string, parseFloat will only consider
 the first decimal point and ignore the rest
 e.g parseFloat("12.34.56") will return 12.34

 they both consider leading whitespace but not trailing characters after the number
 e.g parseInt("   42abc") will return 42
 e.g parseFloat("   56.78xyz") will return 56.78

 they also handle positive and negative signs correctly
 e.g parseInt("-99") will return -99
*/



// how does toFixed () method work
//let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
let num = 3.14159;
console.log(num.toFixed()); // "3"
let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"

/* The toFixed() method formats a number using fixed-point notation. It takes an integer argument
 that specifies the number of digits to appear after the decimal point.
 The method returns a string representation of the number. */
