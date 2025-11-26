console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

/*concat() method is another way to combine strings
const excitedGreeting = "Hello! ".concat("I am very excited to learn ").concat(favoriteSubject).concat("!");
console.log(excitedGreeting);

+= operator to append strings or add to existing strings
let excitedGreeting = "Hello! ";
excitedGreeting += "I am very excited to learn ";
the output will be hello! I am very excited to learn Computer Science!

to check the data type of a variable, you can use the typeof operator
console.log(typeof bot); // Output: string
console.log(typeof favoriteSubject); // Output: string

JavaScript is case-sensitive, so be careful with variable names like bot and Bot,which would be considered different variables.
javascript has the following primitive data types: string, number, boolean, null, undefined, symbol, and bigint.

null represents the intentional absence of any object value,
while undefined indicates that a variable has been declared but not assigned a value.

symbol is a unique and immutable primitive value often used as the key of an object property to avoid name collisions. like this:
const uniqueId = Symbol('id');
const obj = {
  [uniqueId]: 123
};
console.log(obj[uniqueId]); // Output: 123

bigint is used to represent integers larger than the maximum safe integer limit for the number type.
You can create a bigint by appending 'n' to the end of an integer literal, like this:
const bigNumber = 9007199254741991n;
console.log(bigNumber); // Output: 9007199254741991n;

camelCase is a common convention for naming variables in JavaScript, where the first word is lowercase and
each subsequent word starts with an uppercase letter, like favoriteSubject.
when you check the type of null using typeof, it returns "object", which is a known quirk in JavaScript.
 */

