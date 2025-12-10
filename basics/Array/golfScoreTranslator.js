const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2){
    return "Eagle";
  } else if (strokes === par - 1){
    return "Birdie";
  } else if (strokes === par){
    return "Par";
  } else if (strokes === par + 1){
    return "Bogey";
  } else if (strokes === par + 2){
    return "Double Bogey";
  } else if (strokes >= par + 3){
    return "Go Home!";
  }
}

// console.log(golfScore(5, 4)); // "Birdie"
/* the above program can be shortened using array indexing as below */

/*function golfScore(par, strokes) {
  const scoreIndex =
    strokes === 1 ? "Hole-in-one!":
    strokes <= par - 2 ? "Eagle" :
    strokes === par - 1 ? "Birdie" :
    strokes === par ? "Par" :
    strokes === par + 1 ? "Bogey" :
    strokes === par + 2 ? "Double Bogey":
    strokes >= par + 3 ? "Go Home!" : null;

  return names[scoreIndex];
}
// condition ? valueIfTrue : valueIfFalse

that's a ternary way of writing the same logic as above and using the index to return the appropriate string from the names array */
// the above most const name is not used but just for reference