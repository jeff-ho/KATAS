//Helper function to check for matched ingredients in bakery A
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

//Helper function to check for matched ingredients in bakery B
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

//Main function to match available ingredients of each bakery to the recipe.
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipe = '';
  let a = ingredientCheckA(bakeryA,recipes)
  let b = ingredientCheckB(bakeryB,recipes)
  for (i = 0 ; i < a.length ; i++) {
    for (j = 0 ; j < b.length ; j++) {
      if (a[i] === b[j]) {
        recipe+=a[i]
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
