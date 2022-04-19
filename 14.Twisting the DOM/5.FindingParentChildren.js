// properties for accessing the Parent, the Children or a Sibling of a given element

const firstLI = document.querySelector('li')

firstLI.parentElement // returns the ul of the li
firstLI.parentElement.parentElement // returns the body
// so it returns to the parent of that element


const ul = document.querySelector('ul')
ul.children // array like object returning its children

ul.children[0].innerText

firstLi // First thing
firstLI.nextElementSibling // Second thing
firstLI.nextElementSibling.nextElementSibling // Third thing

const thirdLI = firstLI.nextElementSibling.nextElementSibling
thirdLI.previousElementSibling // Second thing