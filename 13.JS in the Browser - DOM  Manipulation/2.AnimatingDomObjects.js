// In Chrome open the console
// Choose Sources > Snippets
// this allows to write code and run it at any point in the browser
// without having to make a separate file

console.log(2+2); // run it and you see the print in the Console


// creating new elements
const myImg = document.createElement('img');
myImg.src = 'https://images.unsplash.com/photo-1648572568240-107d0a081a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&w=1000&q=80'

myImg.style.width = '200px'; // editing the width
document.body.append(myImg) // adding the image to the DOM
myImg.style.transition = 'all 2s'; // to make the transition/moving smoother

const sheet = new CSSStyleSheet(); // making a new css styling sheet
sheet.replaceSync('* {transition: all 2s}'); // adding a new selector
document.adoptedStyleSheet = [sheet];
// The viewpoint is rotating together but the element can be separated from the div
// so every element will move separately

const allEls = document.body.children; // to make every element to move: 1. select all the elements

myImg.style.transform = 'translate(300px,200px)'; // moving the image through css transform

setInterval(() => { // moving it randomly every 2 seconds
     // to loop over every element
    for(let el of allEls){
      const rotation = Math.floor(Math.random() * 360); // to rotate the elements
      const x = Math.floor(document.body.clientWidth * Math.random());
      const y = Math.floor(document.body.clientHeight * Math.random());
      el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
    }
    // const x = Math.floor(document.body.clientWidth * Math.random()); // generating random pixel values
    // const y = Math.floor(document.body.clientHeight * Math.random());
    // myImg.style.transform = `translate(${x}px,${y}px)`;
}, 2000)


