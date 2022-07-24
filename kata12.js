const ingredientCheckA = function(bakeryA,recipes) {
  let matchA = [];
  for(let i = 0 ; i < bakeryA.length ; i++) {
    for (let j = 0 ; j < recipes.length ; j++) {
      for (let ji = 0 ; ji < recipes[j].ingredients.length ; ji++) {
        if (bakeryA[i] === recipes[j].ingredients[ji]) {
          matchA.push(recipes[j].name)
        }
      }
    }
  } return matchA;
}

const ingredientCheckB = function(bakeryB,recipes) {
  let matchB = [];
  for(let i = 0 ; i < bakeryB.length ; i++) {
    for (let j = 0 ; j < recipes.length ; j++) {
      for (let ji = 0 ; ji < recipes[j].ingredients.length ; ji++) {
        if (bakeryB[i] === recipes[j].ingredients[ji]) {
          matchB.push(recipes[j].name)
        }
      }
    }
  } return matchB;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipe = [];
  for (i = 0 ; i < ingredientCheckA(bakeryA,recipes).length ; i++) {
    for (j = 0 ; j < ingredientCheckB(bakeryB,recipes).length ; j++) {
      if (ingredientCheckA(bakeryA,recipes)[i] === ingredientCheckB(bakeryB,recipes)[j]) {
        recipe.push(ingredientCheckA(bakeryB,recipes)[i])
        recipe=ingredientCheckA(bakeryA,recipes)[i]
      }
    }
  } return recipe;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
