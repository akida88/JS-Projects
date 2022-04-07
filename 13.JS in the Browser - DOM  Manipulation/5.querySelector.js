// querySelector
// A newer, all-in-one method to select a single element
// Pass in a CSS selector
// it only returns the first match

// Finds first h1 element:
document.querySelector('h1');
// <h1 class="header">My Webpage</h1>

// Finds first element with ID of red:
document.querySelector('#red');

// Finds first element with class of
document.querySelector('.big');

//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


document.querySelector('input[type="password"]'); // it will return that input




// querySelectorAll
// returns a collection

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');

// returns the NodeList with the inputs
document.querySelectorAll('input');
// * NodeList - type of collection / HTML type paragraph
