function numberOfVowels(data) {
  let sum = 0
  for (i=0 ; i < data.length ; i++) {
    if ((data[i] === 'a') || (data[i] === 'e') || (data[i] === 'i') || (data[i] === 'o') || (data[i] === 'u')) {
      sum = sum + 1
    }
  }
  return sum;
}

console.log(numberOfVowels("aeiou"));