console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

// the indexOf method returns -1 when the substring is not found and if found, it returns the index of the first occurrence

/* ASCII, the charCodeAt() Method and the fromCharCode() Method
ASCII: ASCII, short for American Standard Code for Information Interchange,
is a character encoding standard used in computers to represent text.
It assigns a numeric value to each character, which is universally recognized by machines.

The charCodeAt() Method: This method is called on a string and
returns the ASCII code of the character at a specified index.
const letter = "A";
console.log(letter.charCodeAt(0));  // 65
//


The fromCharCode() Method: This method converts an ASCII code into its corresponding character.
const char = String.fromCharCode(65);
console.log(char);  // A
// */
