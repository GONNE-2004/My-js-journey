console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));

/* The code above demonstrates basic array operations in JavaScript.
It starts by initializing an empty array called shoppingList.
Items are added to the array using push() to add to the end and unshift() to add to the beginning.
Items are removed using pop() to remove from the end and shift() to remove from the beginning.
The code also shows how to update an item in the array by directly accessing its index.
A helper function getShoppingListMsg is defined to format and display the current contents of the shopping list.
Throughout the code, console.log statements are used to provide context and show the state of the shopping list after each operation. */


/* unshith() - adds one or more elements to the beginning of an array and returns the new length of the array.
push() - adds one or more elements to the end of an array and returns the new length of the array.
pop() - removes the last element from an array and returns that element.
shift() - removes the first element from an array and returns that element. */

/*let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed); // Output: "gnidoc" */

/* you can also use destructuring to skip elements in an array. For example:
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;
console.log(firstColor); // Output: "red"
console.log(thirdColor); // Output: "blue" */

/* you can also set default values while destructuring an array. For example:
let points = [10];
let [x = 0, y = 0] = points;
console.log(x); // Output: 10 */

/* using the rest method like the below:
let fruits = ["apple", "banana", "orange", "grape"];
let [first, ...rest, last] = fruits;
console.log(first, rest, last); // will throw syntax error because rest element must be the last element in destructuring assignment */

/*the code shows when the rest method is used in a function
function sum(...numbers) {
  console.log(numbers); // collects into an array
}
sum(1, 2, 3); // [1, 2, 3] */


/* the below shows how the spread operator can be used to copy, merge and expand an array
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3 (expands)

const copy = [...arr]; // [1, 2, 3] (copy)

const both = [...arr1, ...arr2]; */