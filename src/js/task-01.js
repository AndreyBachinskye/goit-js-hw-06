const numberOfCategories = document.querySelectorAll('#categories> li')
console.log("Number of categories:", numberOfCategories.length)

const ul = document.querySelectorAll('.item');
ul.forEach(category => {
    console.log('Category:', category.firstElementChild.textContent)
    console.log('Elements:', category.lastElementChild.children.length)
})