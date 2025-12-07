function truncateString (string, number) {
  let stringLength = string.length;
  if (stringLength > number) {
   let truncate = string.slice(0, number);
    truncate += "...";
    return truncate;
  } else {
    return string;
  }
 }

 console.log(truncateString ("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
 console.log(truncateString ("Peter Piper picked a peck of pickled peppers", 11)); // Peter Piper...
 console.log(truncateString ("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // A-tisket a-tasket A green and yellow basket
 console.log(truncateString ("A-tisket a-tasket A green and yellow basket", 43)); // A-tisket a-tasket A green and yellow basket
 /* The truncateString function takes in two arguments: a string and a number.
 If the length of the string is greater than the number, it truncates the string to the specified number of characters and appends "..." to the end.
 If the length of the string is less than or equal to the number, it returns the original string without any modifications. */