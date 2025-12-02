function maskEmail (email) {
  let at = email.indexOf("@");
  let username = email.slice(0, at);
  let domain = email.slice(at + 1)
  let fChar = username.slice(0, 1); //slice excludes the character at the ending index, with only 0 as argument it would have worked as well
  let lChar = username.slice(-1);
  let stars = "*".repeat(username.length - 2);
  let maskedName = fChar + stars + lChar;
  let maskedEmail = maskedName + "@" + domain;

  return maskedEmail;
}

let email = "user@domain.org";
let result = maskEmail(email);

console.log(result); // Output: "u**r@domain.org"

//the work was a bit tedious but I got it done with little help from ChatGPT on arranging the steps