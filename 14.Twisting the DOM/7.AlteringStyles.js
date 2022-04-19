// manipulate css properties using js in the dom


// Changing the color and background-color:
const h1 = document.querySelector('h1');
h1.style.color // returns ""

// we use the style property to change any of its properties
// which will be affected on the page

h1.style.color = 'pink';
h1.style.backgroundColor = 'yellow' //camel cased! (not background-color but backgroundColor)

// Changing Multiple Elements:
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // array of colors

allLis.forEach((li, i) => {
  const color = colors[i]; // accessing the colors
  li.style.color = color;
})

// for(let li of allLis){   // forOf loop wont help for accessing the colors and use it to change the corresponding ally
//    li.style.color = ''
// }
// can be done with a regular loop or forEach