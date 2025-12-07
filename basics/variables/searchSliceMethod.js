const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`); // The word "freeCodeCamp" was sliced from the message.

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`); // The first word is "Welcome".

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`); // The ending punctuation mark is a "!"

/* includees() method returns true if a substring is found in a string and false if not found
slice() method extracts a section of a string and returns it as a new string, without modifying the original string
slice()method takes two arguments: the starting index and the ending index (the ending index is not included in the extracted string)
.It can also take negative indices to count from the end of the string*/

// to reverse a string using split(), reverse(), and join() methods
const originalString = "Hello, World!";
const reversedString = originalString.split("").reverse().join("");
console.log(`The original string is "${originalString}". The reversed string is "${reversedString}".`); // The reversed string is "!dlroW ,olleH"