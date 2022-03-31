
// Methods on the document for SELECTING


// getElementById
// To select the element with id of bear-photo:
document.getElementById('bear-photo'); // passing the id as a string
// it returns the element based on the id
// if there is no element with the same id it returns null

//To select the element with id of main:
document.getElementById('main');







// getElementsByTagName  > elementS
// returns collections back
// selects by type of element
document.getElementsByTagName('input');
// returns array like collection list with the input elements on the page in this case
// if there is no such element type it returns empty collection bag

// we can store it in a variable
const inputs = document.getElementsByTagName('input');
inputs.pop() // does not work when using array methods - push, includes, indexOf

// we can turn it into array
const arr = [...inputs]

// or iterate over it
for(let input of inputs) {console.log(input)} // shows the objects


for(let input of inputs) {console.log(input.values)}
// returns what is inside those inputs






// getElementsByClassName
document.getElementsByClassName('header')
// returns elements which are objects

const ul = document.getElementsByTagName('ul')[0] // [0] takes the first element
ul
ul.getElementsByClassName('special')
// narrowing the search to the first ul element so it's looking for the class special in it