function conditionalSum(values, condition) {
  let num = 0
  for (i=0 ; i < values.length ; i++) {
    if (values[i] % 2 === 0 && condition === 'even') {
      num = num + values[i]
    } else if (values[i] % 2 !== 0 && condition === 'odd' ) {
      num = num + values[i]
    }
  }
  return num;
}

