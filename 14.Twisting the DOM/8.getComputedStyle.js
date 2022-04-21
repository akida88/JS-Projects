// to retrieve what the current value is for - color, background color, display, position, width, other properties on an element

const h1 = document.querySelector('h1');

const li = document.getComputedStyle('li') // ""
const styles = getComputedStyle(li)
styles // returns an object called CSS styled declaration
li.styles.color = "red"
styles.color // rgb 255, 0, 0

// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// The Window.getComputedStyle() method returns an object containing the
// values of all CSS properties of an element, after applying active stylesheets
// and resolving any basic computation those values may contain.


// style property only contains INLINE styles...
// Even though we gave the h1 a purple color, we still get:
h1.style.color; //""
// Same with any property we did not set inline:
h1.style.fontSize; //""

// We can use getComputedStyle to figure out the ACTUAL styles that are applying:
const compStyles = getComputedStyle(h1);
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.fontSize; //"60px"

