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
  let north = 0;
  let east = 0;
  let south = 0;
  let west = 0;
  let faceingDir = "";
  const directionQuant = quant(directions);
  const directionDir = dir(directions);
  let currentDirection = "";

  const correspondingDir = {
    north: ["east", "west"],
    east: ["south", "north"],
    south: ["west", "east"],
    west: ["north", "south"],
  };

  for (let i = 0; i < directionDir.length; i++) {
    if (!currentDirection) {
      if (directionDir[0] === "right") {
        east+=directionQuant[0];
        currentDirection = "east";
      } else {
        north+=directionQuant[0];
        currentDirection = "north";
      }
    } else {
      if (directionDir[1] === "right") {
        if (currentDirection === "north") {
          east+=directionQuant[i];
        } else if (currentDirection === "east") {
          south+=directionQuant[i];
        } else if (currentDirection === "south") {
          west+=directionQuant[i];
        } else {
          north+=directionQuant[i];
        }
        currentDirection = correspondingDir[currentDirection][0];
      } else {
        if (currentDirection === "north") {
          west+=directionQuant[i];
        } else if (currentDirection === "east") {
          north+=directionQuant[i];
        } else if (currentDirection === "south") {
          east+=directionQuant[i];
        } else {
          south+=directionQuant[i];
        }
        currentDirection = correspondingDir[currentDirection][1];
      }
    }
  }

  console.log(north, east, south, west);

  return { east: east - west, north: north - south };
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
