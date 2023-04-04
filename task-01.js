const liItems = document.querySelectorAll('ul#categories li.item')
console.log(`У списку ${liItems.length} категорії.`)
const liItemS= document.querySelectorAll('#categories .item')


liItemS.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const h2 = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Number of h2: ${h2}`);
});
