function booWho(word) {
  return typeof word === "boolean";
}

// console.log(typeof true) //"boolean"

// const booWHo = (word) => typeof word === "boolean";
// the above is an arrow function version of the same function

/*console.log(booWho(true)); // should return true.
console.log(booWho(false)); // should return true.
console.log(booWho([1, 2, 3])); // should return false.
console.log(booWho([].slice)); // should return false.
console.log(booWho({ "a": 1 })); // should return false.
console.log(booWho(1)); // should return false.
console.log(booWho(NaN)); // should return false.
console.log(booWho("a")); // should return false.
console.log(booWho("true")); // should return false.
console.log(booWho("false")); // should return false.` */