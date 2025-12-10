let lunches = [];

function addLunchToEnd (arr, string) {
  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`)

  return arr;
}

function addLunchToStart (arr, string) {
  arr.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`)

  return arr;
}

function removeLastLunch (arr) {
  if (arr.length > 0) {
  let removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`)
  } else {
  console.log("No lunches to remove.");
  }

  return arr;
}

function removeFirstLunch (arr) {
  if (arr.length > 0) {
  let removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`)
  } else {
  console.log("No lunches to remove.");
  }

  return arr;
}

function getRandomLunch(arr) {
  if (arr.length > 0){
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomItem = arr[randomIndex];
  console.log(`Randomly selected lunch: ${randomItem}`);
   } else {
  console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0){
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

// Example usage:
addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Salad");
showLunchMenu(lunches);
getRandomLunch(lunches);
removeLastLunch(lunches);
removeFirstLunch(lunches);
showLunchMenu(lunches);

/* the above functions can be tested by calling them with the 'lunches' array and appropriate string arguments */