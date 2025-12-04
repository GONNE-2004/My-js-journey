let year = 2000;

function isLeapYear (year) {
   if (year % 400 === 0) {
  return `${year} is a leap year.`;
   } else if(year % 100 === 0) {
  return  `${year} is not a leap year.`;
   } else if(year % 4 === 0) {
  return `${year} is a leap year.`;
   } else {
  return `${year} is not a leap year.`;
   }
}

let result = isLeapYear(year);
console.log(result); // 2000 is a leap year.

/* A leap year is divisible by 4
  but not divisible by 100,
  unless it is also divisible by 400. */

/* should start by checking if the year is divisible by 400 because
helps to not exclude 2000 and other century years that are leap years.
Then check if the year is divisible by 100 to exclude century years that are not leap years.
 Finally, check if the year is divisible by 4 to include regular leap years. */
