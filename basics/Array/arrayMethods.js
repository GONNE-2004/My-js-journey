let numbers = [10, 20, 30, 20, 40];
let index = numbers.indexOf(20);
console.log(index); // Output: 1

let colors = ["red", "green", "blue", "yellow", "green"];
let index1 = colors.indexOf("green", 2);
console.log(index1); // Output: 4

let fruits = ["apple", "banana", "orange", "grape"];
let index2 = fruits.indexOf("kiwi");
console.log(index2); // Output: -1

/* the above code demonstrates the use of the indexOf() method to find the index of elements in arrays. */




/*the below  code shows how splice() method works in arrays*/
// array.splice(startIndex, itemsToRemove, item1, item2)

let colors2 = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors2); // Output: ["red", "yellow", "purple", "green", "blue"]

let fruits2 = ["apple", "banana", "orange", "grape"];
fruits2.splice(2, 1, "kiwi", "mango");

console.log(fruits2); // Output: ["apple", "banana", "kiwi", "mango", "grape"]

let numbers2 = [10, 20, 30, 40, 50];
numbers2.splice(1, 3);

console.log(numbers2); // Output: [10, 50]

/* the above code demonstrates the use of the splice() method to add, remove, and replace elements in arrays. */




/* the below shows how includes() method works in arrays*/
// array.includes(element, startIndex)

let fruits3 = ["apple", "banana", "orange"];
let hasBanana = fruits3.includes("banana");
console.log(hasBanana); // Output: true

let hasGrapes = fruits3.includes("grape");
console.log(hasGrapes); // Output: false

let numbers3 = [10, 20, 30, 40, 50];
let hasThirtyFromIndex2 = numbers3.includes(30, 2);
console.log(hasThirtyFromIndex2); // Output: true

let hasTwentyFromIndex3 = numbers3.includes(20, 3);
console.log(hasTwentyFromIndex3); // Output: false

/* the above code demonstrates the use of the includes() method to check for the presence of elements in arrays. */




/*the belpw shows the different ways to create shallow copies of arrays*/
let originalArray = [1, 2, 3, 4, 5];

// Using slice()
let copy1 = originalArray.slice();
console.log(copy1); // Output: [1, 2, 3, 4, 5]

// Using spread operator
let copy2 = [...originalArray];
console.log(copy2); // Output: [1, 2, 3, 4, 5]

// Using Array.from()
let copy3 = Array.from(originalArray);
console.log(copy3); // Output: [1, 2, 3, 4, 5]

// Using concat()
let copy4 = [].concat(originalArray);
console.log(copy4); // Output: [1, 2, 3, 4, 5]

/* the above code demonstrates different methods to create shallow copies of arrays in JavaScript. */


