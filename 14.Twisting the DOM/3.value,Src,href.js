const inputs = document.querySelectorAll('input');

inputs[0].value // returns the value of the form

// for checkboxes we use the property of checked, not value
inputs[2]. checked // returns false

// we can set their values from the code
// and we can reset it by setting its value to an empty string:
inputs[0].value = '' // returns ""



const a = document.querySelector('a')
a.href // returns the url
// we can change it
a.href = "website bla bla"


// we can change all the attributes