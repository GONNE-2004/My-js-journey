const firstResult = 5 + "10";
console.log(`5 + 10 = ${firstResult}`);   // "510"

const secondResult = "Eight" - 5;
console.log(`8 - 5 = ${secondResult}`); // NaN

const thirdResult = true + 5;
console.log(`1 + 5 = ${thirdResult}`); // 6

const fourthResult = false + 8;
console.log(`0 + 8 = ${fourthResult}`); // 8

const fifthResult = "10" * 2;
console.log(`10 * 2 = ${fifthResult}`); // 20

const sixthResult = null + 22;
console.log(`0 + 22 = ${sixthResult}`); // 22

const seventhResult = undefined + 5;
console.log(`undefined + 5 = ${seventhResult}`); // NaN

/*
  In the above examples, we can see how JavaScript performs type coercion
  when different data types are involved in arithmetic operations.
  Strings are concatenated when using the + operator, while other arithmetic
  operations attempt to convert strings to numbers. Boolean values are treated
  as 1 (true) and 0 (false), null is treated as 0, and undefined results in NaN
  when used in arithmetic operations.
*/

// unary plus operator
const strNumber = "42";
const coercedNumber = +strNumber;
console.log(`The type of coercedNumber is: ${typeof coercedNumber}`); // number
console.log(`The value of coercedNumber is: ${coercedNumber}`); // 42

/*
  The unary plus operator (+) is a quick way to convert a string representation
  of a number into an actual number type in JavaScript. In this example,
  the string "42" is converted to the number 42.

  unary negation operator (-) can also be used to convert strings to numbers,
  but it also negates the value.
  e.g const negativeNumber = -"42"; // -42
*/

