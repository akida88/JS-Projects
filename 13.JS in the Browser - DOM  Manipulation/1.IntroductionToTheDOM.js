// INTRODUCTION TO THE DOM
// https://www.w3schools.com/js/js_htmldom.asp
// структурирани елементи на страница

// Starting to connect JS with HTML and CSS

// The DOM is a JS representation of a webpage.
// It's your JS "window" into the contents of a webpage
// It's just a bunch of objects that you can interact with via JS
// we can change the value of the form, styles, adding animations

// HTML+CSS go in and JS objects come out

// D - Document
// O - Object
// M - Model

// So the DOM is bunch of objects made by the browser
// based of the incoming content the HTML and CSS

// Check these:
// https://codepen.io/zerospree/full/bNWbvW
// https://codepen.io/ehermanson/pen/KwKWEv
// https://codepen.io/atakan/pen/nPOZZR



// Next videos:
//Important Note: HTML & CSS
// Taste of the DOM
// Another fun DOM example // 2. Animating DOM Objects



// Exploring the Google page:
document.querySelector('#id') // shows the html code of the button

// save it to a variable:
const btnObj = document.querySelector('#id');
btnObj // will give a representation of the button as well, which does not look like an object

// checking for object with .dir
console.dir(btnObj) // shows that it's an object with lots of methods and properties
// which all relate to the button

// changing the button value
btnObj.value // I'm Feeling Lucky
btnObj.value = 'I AM NOT LUCKY' // so the btn value is changed now

// same as
const o = {value: 4} // undefined
o.value = 56 // 56

// changing the JS object is linked to seeing that change on the page
// so when we change sth we do it through JS objects then the browser knows abt it


// adding an event
btnObj.addEventListener('mouseover', function(){alert("HI")})
// so when we hover on the button an alert pops up