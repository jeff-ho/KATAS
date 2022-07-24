const makeCase = function (input, wordCase) {
  if (typeof wordCase === "string") {
    return caseFunction(input, wordCase);
  } else {
    let result = input;
    let orderedList = ordering(wordCase);
    for (let i = 0; i < orderedList.length; i++) {
      result = caseFunction(result, orderedList[i]);
    }
    return result;
  }
};

const caseFunction = function (input, wordCase) {
  let stringArray = input.split(" ");
  let stringLetter = input.split("");
  let newArray = [];
  let finalWord = "";
  let newWord = "";
  switch (wordCase) {
    case "camel": {
      for (let i = 0; i < stringArray.length; i++) {
        if (i === 0) {
          newArray.push(stringArray[0].toLowerCase());
        } else {
          newArray.push(
            stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
          );
        }
      }
      return newArray.join("");
    }

    case "pascal": {
      for (let i = 0; i < stringArray.length; i++) {
        newArray.push(
          stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
        );
      }
      return newArray.join("");
    }

    case "snake": {
      return stringArray.join("_");
    }

    case "kebab": {
      return stringArray.join("-");
    }

    case "title": {
      for (let i = 0; i < stringArray.length; i++) {
        newArray.push(
          stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
        );
      }
      return newArray.join(" ");
    }

    case "vowel": {
      for (let i = 0; i < stringLetter.length; i++) {
        let letter = stringLetter[i];
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u"
        ) {
          newArray.push(stringLetter[i].toUpperCase());
        } else {
          newArray.push(stringLetter[i]);
        }
      }
      return newArray.join("");
    }

    case "consonant": {
      for (let i = 0; i < stringLetter.length; i++) {
        let letter = stringLetter[i];
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u"
        ) {
          newArray.push(stringLetter[i].toLowerCase());
        } else {
          newArray.push(stringLetter[i].toUpperCase());
        }
      }
      return newArray.join("");
    }

    case "upper": {
      return stringArray.join(" ").toUpperCase();
    }

    default: {
      return stringArray.join(" ").toLowerCase();
    }
  }
};

let ordering = function (wordCase) {
  let orderArray = [];
  let newArray = [];
  const ordering = [
    "camel",
    "pascal",
    "snake",
    "kebab",
    "title",
    "vowel",
    "consonant",
    "upper",
    "lower",
  ];
  for (i = 0; i < wordCase.length; i++) {
    orderArray.push(ordering.indexOf(wordCase[i]));
    orderArray.sort((a, b) => a - b);
  }
  for (i = 0; i < orderArray.length; i++) {
    newArray.push(ordering[orderArray[i]]);
  }
  return newArray;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(
  makeCase("this is a string", ["upper", "snake", "title", "vowel", "kebab"])
);
