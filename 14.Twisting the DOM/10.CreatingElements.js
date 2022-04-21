// creating elements and adding them to the DOM
// creating an element using the method createElement('type of element that you want')
document.createElement('h2')
// returns an empty element <b2></b2> - html representation

// save it to a variable
const newh2 = document.createElement('h2')
console.dir(newh2)
// returns an object
// setting its text:
newh2.innerText = "I like animals!"

// setting a class
newh2.classList.add('special')

newh2
// returns
// <h2 class ="special">I like animals!</h2>

// getting it on the DOM
// appendChild method - we call it on parent that we want to append element into
// append = добавям, закачам, прибавям
const section = document.querySelector('section')
section.appendChild(newh2) // we add the element to the dom as child to the section




// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg);


// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);