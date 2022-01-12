const numbers = {
   100 : 'one hundred',
   16  : 'sixteen'
};

// access values out of an object
numbers.100 // syntax Errpr
numbers[100] // "one hundred"
// it converts the number into a string but in the second case it search for a matching key
numbers['100'] // "one hundred"



const palette = {
   red: '#eb4d4b',
   yellow: '#f9ca24',
   blue: '#30336b' // blue is the property
};

palette.red // "#eb4d4b" // easier and nicer to use
palette['blue'] // "#30336b" Can not use it without the ' '
palette[blue] // it's looking for a variable or something called yellow

// using a variable color
let color = "yellow";
palette[color] // "#f9ca24"

// but if we use the dot notation it wont work because it's looking for a specific property
// because we only have red, yellow and blue keys
palette.color // undefined

palette["bl"+"ue"] // "#30336b"
