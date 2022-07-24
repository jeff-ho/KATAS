function repeatNumbers(data) {
  result = ''
  final = []
  for (i = 0 ; i < data.length ; i++) {
    for (j = 0 ; j < data[i][1] ; j++) {
      result += data[i][0];
    }
    final.push(result);
    result = '';
  }
  return final.join(', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));