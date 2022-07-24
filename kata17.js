const urlDecode = function(text) {
  let object = {};
  const regExp = /[=&]/g;
  let stringArray = text.replace(regExp, ' ').split(' ')
  for(let i = 0 ; i < stringArray.length ; i+=2) {
    object[stringArray[i]] = stringArray[i+1].split('%20').join(' ')
      }
    return object;
    };

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);



