// The methods
// getAttributes and setAttributes

// they allow us to access or change the value of attributes on elements
const range = document.querySelector('input[type="range"]')

range.getAttribute('max') // returns the max value that is set
range.getAttribute('type') // returns "range"
// we pass the attribute that we are looking for on the element
// that we are calling it on
// if the attribute is not there it returns null

// setAttribute needs two arguments:
range.setAttribute('min', '-500') // sets the min attribute to -500

// changing the type
range.setAttribute('type', 'radio')