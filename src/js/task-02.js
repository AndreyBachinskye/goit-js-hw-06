const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngrediens = ingredients.map(ingredient =>{
  
const createElemental = document.createElement('li');
createElemental.textContent = ingredient;
createElemental.classList.add('item')
return createElemental
})
const ul = document.querySelector('ul')
ul.append(...listOfIngrediens)

console.log(document)

