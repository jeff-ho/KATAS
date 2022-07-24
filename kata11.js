const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let sphVolume = 4/3 * PI * Math.pow(radius , 3)
  return sphVolume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);


const coneVolume = function (radius, height) {
  let conVolume = 1/3 * PI * Math.pow(radius, 2) * height
  return conVolume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);


const prismVolume = function (height, width, depth) {
  let prisVolume = height * width * depth
  return prisVolume;
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {
  let total = 0;
  for (solid of solids) {
    if(solid.type === 'sphere') {
      total += sphereVolume(solid.radius)
    } else if (solid.type === 'cone') {
      total += coneVolume(solid.radius, solid.height)
    }
  } return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);