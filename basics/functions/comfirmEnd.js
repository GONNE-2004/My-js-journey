function confirmEnding (stringAgainst, target) {
  let mainStringLength = stringAgainst.length;

  let targetLength = target.length;

  let targetIndex = mainStringLength - targetLength;

 let substring = stringAgainst.substring(targetIndex);

 return substring === target;
}

console.log(confirmEnding ("Bastian", "n")); // true
/* The confirmEnding function takes in two arguments: a string (stringAgainst) and a target substring (target).
It calculates the length of both the main string and the target substring.
It then determines the starting index for extracting the substring from the main string by subtracting the length of the target from the length of the main string.
Using the substring method, it extracts the portion of the main string starting from the calculated index to the end of the string.
Finally, it compares the extracted substring with the target substring and returns true if they match, or false otherwise. */



/*
function confirmEnding(target, stringAgainst) {
  let targetLength = target.length;
  let substring = stringAgainst.slice(-targetLength);
  return substring === target;
} */

/* Alternative solution using the slice() method:
The confirmEnding function takes in two arguments: a target substring (target) and a main string (stringAgainst).
It calculates the length of the target substring.
Using the slice method with a negative index, it extracts the last portion of the main string that has the same length as the target substring.
Finally, it compares the extracted substring with the target substring and returns true if they match, or false otherwise.
*/