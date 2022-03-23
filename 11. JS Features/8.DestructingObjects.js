// Prev> DestructingArray / JS Features



// {OBJECT} Destructing
// we make the variables based on the name of the property
const runner = {
   first: "Eluid",
   last: "Kipchoge",
   country: "Kenya",
   title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {first, last, country, time} = runner;

first; // Eluid
last; // Kipchoge
country // Kenya
time // undefined

// if it finds the property first it tooks the value and store it in a variable with the same name
// the variable names must be existing key names in the object


// const {
//    country: nation,
//    title: honorific
// } = runner;
// nation Kenya
// title becomes honorific so calling honorific will return "Elder of the Order of the Golden Heart of Kenya"
// so title is not a variable anymore



// we can use the rest operator
const {first, last, ...other} = runner;
// first Eliud
// last Kipchoge
// other  country: Kenya, title: "Elder of the Order of the Golden Heart of Kenya"




// Next> NestedDestructuring.js / JS Features