let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if(randomNumber === 1){
   selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);

/*
  In this code, we create a simple fortune teller that randomly selects one of five fortunes to display.
  We use Math.random() to generate a random number between 1 and 5, and then use if-else statements to
  determine which fortune to select based on the generated number. Finally, we log the selected fortune to the console.
*/

/*
  Note: You can run this code multiple times to see different fortunes being displayed each time.
*/

/* this === operator is called strict equality operator
 it checks for both value and type equality
 e.g 5 === "5" will return false because one is number and other is string
 whereas 5 == "5" will return true because it only checks for value equality


 there is also !== operator called strict inequality operator
 which checks for both value and type inequality
 e.g 5 !== "5" will return true because one is number and other is string
 whereas 5 != "5" will return false because it only checks for value inequality

 there is also <, >, <=, >= operators for less than, greater than,
 less than or equal to, greater than or equal to comparisons respectively

  Note: It is generally recommended to use === and !== operators
*/