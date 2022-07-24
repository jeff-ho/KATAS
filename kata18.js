const squareCode = function (message) {
  let newMessage = message.split(" ").join("");
  let length = newMessage.length;
  let sqr = Math.ceil(Math.sqrt(length));
  let encodedMsg = "";

  for (let i = 0; i < sqr; i++) {
    for (let j = i; j < length; j += sqr) {
      encodedMsg += newMessage[j];
    }
    encodedMsg += ' ';
  }
  return encodedMsg;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
