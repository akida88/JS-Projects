// Prev> SpreadArrayLiterals / JS Features


// SPREAD in Object Literals
// Copies properties from one object into another object literal.
// Creating copies of object or combinations of objects


const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true, legs: 4 };

const dog = { ...canine, isPet: true };
// {family: "Caninae", furry: true, isPet: true}

const lion = { ...feline, genus: 'Panthera' };
// {legs: 4, family: 'Felidae', genus: "Panthera"}

// if the properties have the same key, they overwrite each other
const catDog = { ...feline, ...canine};
// {legs: 4, family: 'Caninae', furry: true}

// Order does matter:
const tripod = { ...canine, legs: 3 };
// {family: "Caninae", furry: true, legs: 3}


// Creating clone of an object:
const catDogClone = { ...catDog };
// we made a copy so its not the same reference so:
// catDogClone === catDog   => false

// Spreading an object into another object
// object is not iterable so spreading it in array wont work:
// [...dog]   => Error

// Spreading [array] into object {literal}
{[4,5,6]}
// 0: 4  key 0: value 4
// 1: 5
// 2: 6
// we get key value pairs based on their indexes 



// we can create array literals that also contain object literals
// where we use spread in different context
const random = [...'hello', {...catDog}];
// h, e, l, l, o, legs: 4, family: 'Caninae', furry: true

// Order matters if we have conflicting properties!!




// Next> ArgumentsObjectRest / JS Features