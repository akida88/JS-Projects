// Important properties and methods
// classList
// getAttribute()
// setAttribute()
// appendChild()
// append()
// prepend()
// removeChild()
// remove()
// createElement
// innerText
// textContent
// innerHTML
// value
// children
// nextSibling
// previousSibling
// style



// Using the innerText and textContent properties

// Accessing text from element
const h1 = document.querySelector('h1')
h1.innerText // returns the text from the h1 -> My Webpage
// <h1 class="header">My Webpage</h1>
// it can be changed by:
h1.innerText = "I'm Hungry!"




// h1.innerText = h1.innerContent = "My Website!"
// innerText will show the text that is shown on the page while
// textContent will show the text styled with additional space, etc from the actual HTML file