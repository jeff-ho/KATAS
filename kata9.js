const camelCase = function(input) {
  const stringArray = input.split(" ") 
  const newArr = [];
  for (let i = 0 ; i < stringArray.length ; i++) {
    if (i === 0) {
     newArr.push(stringArray[i][0].toLowerCase() + stringArray[i].slice(1))
    } else {
    newArr.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1))
    }
  }
  return newArr.join("");
};
 

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));