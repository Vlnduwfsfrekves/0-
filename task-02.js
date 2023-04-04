const ingredients = [  'Potato',  'Mushrooms',  'Garlic',  'Tomatoes',  'Green',  'Seasonings',];
const ul = document.getElementById('ingredients');
const fragment = document.createDocumentFragment()
for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  fragment.appendChild(li);
}
ul.appendChild(fragment);
