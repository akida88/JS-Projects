// Other methods that we can use to add elements to the DOM:

// Append
// appendChild takes a new element, but it is called on a parent
const parentUL = document.querySelector('ul')
const newLI = document.createElement('li')

newLI.innerText = 'I AM A NEW LI';
parentUL.appendChild(newLI) // adds a last child to the element


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





newLI.innerText = 'I AM A NEW LIST ITEM!';

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI) //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);


firstP.append(i,newLI)
// both were appended inside the paragraph
// PREPEND will make the thing as the first child
// and will go to the beginning of the paragraph

// appendChild insert only one element