function urlEncode(text) {
  let newText = "";
  for (let i = 0 ; i < text.length ; i++) {
    let current = text[i];
    let index = i;
    let change = current;
    if (current === " " && (index === 0 || (index === text.length - 1))) {
      change === current
  } else if (current === " ") {
    change = "%20"
  }
    newText += change;
    }
    return newText;
}

console.log(urlEncode("blue is greener than purple for sure"));