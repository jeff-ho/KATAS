// gives me array of just directions
const dir = function (directions) {
  let direc = [];
  for (let i = 0; i < directions.length; i += 2) {
    direc.push(directions[i]);
  }
  return direc; // [ right, right, left]
};

// gives me array of just quantity of each direction
const quant = function (directions) {
  let quantity = [];
  for (let j = 1; j < directions.length; j += 2) {
    quantity.push(directions[j]);
  }
  return quantity; // [2,4,2]
};

//main function
const blocksAway = function (directions) {
  let startX = 0; // [x,y] or [east , north]
  let startY = 0;
  let faceingDir = "";
  const directionQuant = quant(directions);
  const directionDir = dir(directions);

  if (directionDir[0] === "right") {
    startX += directionQuant[0];
    faceingDir = "east";
  } else if (directionDir[0] === "left") {
    startY += directionQuant[0];
    faceingDir = "north";
  }

  for (let i = 1; i < directionDir.length; i++) {
    if (faceingDir === "east") {
      switch (directionDir[i]) {
        case "right":
          startY -= directionQuant[i];
          faceingDir = "south";
          break;
        case "left":
          startY += directionQuant[i];
          faceingDir = "north";
          break;
      }
    } else if (faceingDir === "north") {
      switch (directionDir[i]) {
        case "right":
          startX += directionQuant[i];
          faceingDir = "east";
          break;
        case "left":
          startX -= directionQuant[i];
          faceingDir = "west";
          break;
      }
    } else if (faceingDir === "south") {
      switch (directionDir[i]) {
        case "right":
          startX -= directionQuant[i];
          faceingDir = "west";
          break;
        case "left":
          startX += directionQuant[i];
          faceingDir = "east";
          break;
      }
    } else {
      switch (directionDir[i]) {
        case "right":
          startY += directionQuant[i];
          faceingDir = "north";
          break;
        case "left":
          startY -= directionQuant[i];
          faceingDir = "south";
          break;
      }
    }
  }
  return {east: startX, north: startY}
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1])); // correct ans. [1, 3]
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
