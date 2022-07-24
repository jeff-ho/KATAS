let prompt = require("prompt-sync")();

let randomNum = Math.floor(Math.random() * 101);
console.log("Secret Number: ", randomNum);
let array = [];

while (true) {
  let answer = parseInt(prompt("Guess a number: "));
  if (answer === randomNum) {
    console.log("You got it! You took " + array.length + " attemps!");
    break;
  } else if (answer < randomNum) {
    console.log("Too Low!");
    array.push(answer);
  } else if (answer > randomNum) {
    console.log("Too High!");
    array.push(answer);
  } else if (typeof answer !== "int") {
    console.log("Not a number! Try Again!");
  } else if (array.includes(answer)) {
    console.log("Already Guessed!");
  }
}
