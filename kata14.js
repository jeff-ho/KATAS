const calculateChange = function(total, cash) {
  let diff = cash - total;
  let change = {};
  const coinTypes = ['twentyDollar' , 'tenDollar' , 'fiveDollar' , 'twoDollar' , 'oneDollar' , 'quarter' , 'dime' , 'nickel' , 'penny'];
  const coinValues = [2000 , 1000 , 500 , 200 , 100 , 25 , 10 , 5 ,1];
  let amountPer;

  for (i = 0 ; i < coinValues.length ; i++) {
    amountPer = Math.floor(diff/coinValues[i]);
    if (amountPer > 0) {
      change[coinTypes[i]] = amountPer;
      diff = diff % coinValues[i]
    }
  }
  return change;
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));