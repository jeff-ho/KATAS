//since we are trying to solve this without sort() method, we will use bubble sort.

function sumLargestNumbers(data) {
  for (i=0 ; i < data.length - 1; i++ ) {
    for (j=0 ; j < data.length - 1 - i; j++) {
      if (data[j]>data[j+1]) {
        [data[j],data[j+1]] = [data[j+1],data[j]];
      }
    }
  }
  let newData = data.reverse();
  let sum = newData[0] + newData[1];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));