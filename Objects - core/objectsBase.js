// Data structures:

// Using arrays:
const fitbitData = [
   308727,
   1814,
   211
]

const lucyFitbitData = [
   12344, // total steps as example
   1814,
   211
]
// this sort of data does not work well in an array situation

// Using separate variables: but they are not grouped together in any way except the name
let lucyTotalSteps = 123123;
let lucyStepsSpeed = 6;


// the Object structure: for storing data where we can associate things in group, pieces of data
// together, we can specify labels:

const fitBitData = {
   totalSteps       : 308727,  // totalSteps is the title of the value
   totalMiles       : 211.7,   // key : value
   avgCalorieBurn   : 5755,
   workoutsThisWeek : '5 of 7',
   avgGoodSleep     : '2:13'
};


// Objects are collections of properties.
// "sadfa".length // "sadfa" is the string; .length is the property
// Properties are a key and value pair. // properties = key + value:
// username: ----->'Akida' // username - the key; Akida - is the value
// In Python Objects are called Dictionary

// Rather than accessing data using index (like an array), we use custom keys.

// Object is a container that contains information in form of pairs(key+value), which are stored together
// when there is a value it should have a correspondive key which (key) can be used to find that value latter on

