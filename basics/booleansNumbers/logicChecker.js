const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}
const timmyAge = 18;
if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}

/* ternary operator example
const canTimmyDrive = timmyAge >= 16 ? true : false;
console.log(`Can Timmy drive? ${canTimmyDrive}`);

basically the above code is the same as the if-else statement but
 we kinda learning about truthy and falsy values here
*/

/*
Bitwise Operators
Bitwise AND (&) Operator: This operator returns a 1 in each bit position for which the corresponding bits of both operands are 1.
Bitwise AND Assignment (&=) Operator: This operator performs a bitwise AND operation with the specified number and reassigns the result to the variable.
Bitwise OR (|) Operator: This operator returns a 1 in each bit position for which the corresponding bits of either or both operands are 1.
Bitwise OR Assignment (|=) Operator: This operator performs a bitwise OR operation with the specified number and reassigns the result to the variable.
Bitwise XOR (^) Operator: This operator returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1.
Bitwise NOT (~) Operator: This operator inverts the binary representation of a number.
Left Shift (<<) Operator: This operator shifts all bits to the left by a specified number of positions.
Right Shift (>>) Operator: This operator shifts all bits to the right. by a specified number of positions.
Zero-fill Right Shift (>>>) Operator: This operator shifts all bits to the right by a specified number of positions, filling the leftmost bits with zeros.
*/

// Example of Bitwise AND (&) Operator
const a = 5; // Binary: 0101
const b = 3; // Binary: 0011
const andResult = a & b; // Binary: 0001 (Decimal: 1)
console.log(`Bitwise AND of ${a} & ${b} = ${andResult}`);

// Example of Bitwise OR (|) Operator
const orResult = a | b; // Binary: 0111 (Decimal: 7)
console.log(`Bitwise OR of ${a} | ${b} = ${orResult}`);

// Example of Bitwise XOR (^) Operator
const xorResult = a ^ b; // Binary: 0110 (Decimal: 6)
console.log(`Bitwise XOR of ${a} ^ ${b} = ${xorResult}`);

// Example of Bitwise NOT (~) Operator
const notResult = ~a; // Binary: 1010 (Decimal: -6)
console.log(`Bitwise NOT of ~${a} = ${notResult}`);

// Example of Left Shift (<<) Operator
const leftShiftResult = a << 1; // Binary: 1010 (Decimal: 10)
console.log(`Left Shift of ${a} << 1 = ${leftShiftResult}`);

// Example of Right Shift (>>) Operator
const rightShiftResult = a >> 1; // Binary: 0010 (Decimal: 2)
console.log(`Right Shift of ${a} >> 1 = ${rightShiftResult}`);

// Example of Zero-fill Right Shift (>>>) Operator
const zeroFillRightShiftResult = a >>> 1; // Binary: 0010 (Decimal: 2)
console.log(`Zero-fill Right Shift of ${a} >>> 1 = ${zeroFillRightShiftResult}`);

/*
  In this code, we demonstrate the use of various logical and bitwise operators in JavaScript.
  We show how to use conditional statements to check boolean values and age eligibility.
  Additionally, we provide examples of bitwise operations such as AND, OR, XOR, NOT,
  left shift, right shift, and zero-fill right shift, along with their results.
*/