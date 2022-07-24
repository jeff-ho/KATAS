// gives me array of just directions
const dir = function (directions) {
  let direc = [];
  for (let i = 0; i < directions.length; i += 2) {
    direc.push(directions[i]);
  }
  return direc;
};

// gives me array of just quantity of each direction
const quant = function (directions) {
  let quantity = [];
  for (let j = 1; j < directions.length; j += 2) {
    quantity.push(directions[j]);
  }
  return quantity;
};

const blocksAway = function (directions) {
  let startX = 0; // [x,y] or [east , north]
  let startY = 0;
  let final = {};
  let faceingDir = "";
  if (dir(directions)[0] === "right") {
    startX += quant(directions)[0]
    faceingDir === "east";
  } else if (dir(directions)[0] === "left") {
    startY += quant(directions)[0]
    faceingDir === "north";
  }

  for (let i = 1; i < dir(directions).length; i++) {
    if(faceingDir === 'east') {
      switch(dir(directions)[i]) {
        case 'right':
          startY -= quant(directions)[i]
          faceingDir === 'south'
          break;
        case 'left':
          startY += quant(directions)[i]
          faceingDir === 'north'
          break;
      }
    }
    if(faceingDir === 'north') {
      switch(dir(directions)[i]) {
        case 'right':
          startX += quant(directions)[i]
          faceingDir === 'east'
          break;
        case 'left':
          startX -= quant(directions)[i]
          faceingDir === 'west'
          break;
      }
    }
    if(faceingDir === 'south') {
      switch(dir(directions)[i]) {
        case 'right':
          startX -= quant(directions)[i]
          faceingDir === 'west'
          break;
        case 'left':
          startX += quant(directions)[i]
          faceingDir === 'east'
          break;
      }
    }
    if(faceingDir === 'west') {
      switch(dir(directions)[i]) {
        case 'right':
          startY += quant(directions)[i]
          faceingDir === 'north'
          break;
        case 'left':
          startY -= quant(directions)[i]
          faceingDir === 'south'
          break;
      }
    }
  }
  return [startX ,startY];
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));