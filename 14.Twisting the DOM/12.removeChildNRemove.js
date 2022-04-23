// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector('.special')
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)

const ul = document.querySelector('section ul')
// returns the ul which is inside a section

// search within the ul for the class of special
ul.querySelector('.special') 
// if it's inside a section: (section .special)

const remove = ul.querySelector('.special')
remove // returns the el that we want to remove

// so to remove it we use
ul.removeChild(remove)
// parent.removeChild(element/child of the parent)
// we can save it in a variable if we want to use it later




// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
// select the thing that we want to remove, we dont need the parent
// Select the H1
const h1 = document.querySelector('h1');
h1.remove(); //REMOVE IT!

// or 
document.body.removeChild(h1)