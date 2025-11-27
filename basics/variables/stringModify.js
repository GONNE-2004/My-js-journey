const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

/*repeat() method constructs and returns a new string which contains
the specified number of copies of the string on which it was called, concatenated together.
if you give repeat() a number less than 0, it returns an empty string or if you give it a decimal,
it will be rounded down to the nearest whole number and infinity will throw a RangeError

replace() method searches a string for a specified value, or a regular expression,
and returns a new string where the specified values are replaced.
It only replaces the first occurrence of the specified value.

replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
The pattern can be a string or a regular expression, and the replacement can be a string or a function.
*/
