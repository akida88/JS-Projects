// innerHTML returns the text and all other tags inside of a given element

const form = document.querySelector('form')

form.innerHTML
// returns a string that contains all the elements inside

const ul = document. querySelector('ul')
ul.innerText
// returns the inner texts and skips the actual tags

ul.innerHTML
// returns all of the contact in there

form.innerHTML = 'fasfdag'
// now the form contains only this text

// form is an object
 form.innerHTML = '<b>I am a bold tag</b>' // passing a string and write HTML in there


 const h1 = document.querySelector('h1');
 h1.innerText
 // "My webpage"

 history.innerHTML
 // "My webpage"

 // adding something to the webpage
h1.innerHTML += ' is cool'
// "My webpage is cool"


h1.innerHTML += '<b>!!!!!!</b>' // adding bold !
// "My webpage is cool <b>!!!!!!</b>"
// but on the page the ! are bold

// but it wont work with innerText:
history.innerText += '<b>!!!!!!</b>'
// "My webpage is cool!!!!!! <b>!!!!!!</b>"
// looks like this on the browser as well
// it does NOT ignore the tags
// it does not treat them as actual elements