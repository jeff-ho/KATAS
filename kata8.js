function repeatNumbers(data) {
  let array = [];
  for( let i = 0 ; i < data.length ; i++) {
    let value = (data[i][0]).toString();
    let rep = data[i][1];
    array.push(value.repeat(rep));
  }
  return array;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));