const multiplicationTable = function(maxValue) {
  let table = '';
  for (i = 1 ; i <= maxValue ; i++  ) {
    for (j = 1 ; j <= maxValue ; j++) {
      if (j === maxValue) {
        table += (i * j) + '\n'
      } else {
        table += i * j + ' '
      }
    }
  } return table;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));