const makeCase = function (input, wordCase) {
  let stringArray = input.split(" ");
  let stringLetter = input.split("");
  let newArray = [];

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

    case "lower": {
      return stringArray.join(" ").toLowerCase();
    }

    default: {
      let newWord = "";

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
      if (ordering.indexOf(wordCase[0]) < ordering.indexOf(wordCase[1])) {
        newWord += makeCase(input, wordCase[0]);
        return makeCase(newWord, wordCase[1]);
      } else {
        newWord += makeCase(input, wordCase[1]);
        return makeCase(newWord, wordCase[0]);
      }
    }
  }
};
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
