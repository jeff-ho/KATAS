let prompt = require("prompt-sync")();

let randomNum = Math.floor(Math.random() * 101);
console.log("Secret Number: ", randomNum);
let array = [];
let ans;

while (true) {
  let answer = parseInt(prompt("Guess a number: "));
  if (answer === randomNum) {
    console.log("You got it! You took " + array.length + " attemps!");
    break;
  } else if (answer < randomNum) {
    console.log("Too Low!");
    ans = answer;
    array.push(answer);
  } else if (answer > randomNum) {
    console.log("Too High!");
    ans = answer;
    array.push(answer);
  } else if (typeof answer !== "int") {
    console.log("Not a number! Try");
  } else if (array.includes(answer)) {
    console.log("Already Guessed!");
  }
  console.log(array.length);
}
