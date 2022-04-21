// Other methods that we can use to add elements to the DOM:

// Append
// appendChild takes a new element, but it is called on a parent
const parentUL = document.querySelector('ul')
const newLI = document.createElement('li')

newLI.innerText = 'I AM A NEW LI';
parentUL.appendChild(newLI) // adds a last child to the element


// Prepend



// insertBefore
// we still have to select the parent and the element we want to insert before
const firstLI = document.querySelector('li.todo') // takes the first li with a class of todo
firstLI // returns the first li

// insert to the top
parentUL.insertBefore(newLI, firstLI) // (the new thing we want to insert, where to insert it - before the firstLI)

// insert between elements
const lastUL = document.querySelectorAll('li.todo')[2] // [the index of the element with a class of todo]
parentUL.insertBefore(newLI, lastTodo)


// inserting before the paragraph
const i = document.createElement('i')
i.innerText = 'I AM ITALICS!!!'
i // returns I AM ITALICS!!!

const firstP = document.querySelector('p')
firstP.insertAdjacentElement('beforebegin', i) // before the paragraph
firstP.insertAdjacentElement('afterend', i) // after the paragraph
firstP.insertAdjacentElement('afterbegin', i) // into the paragraph in its start