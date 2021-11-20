// We can put arrays inside other arrays


const colors = [
    ["red", "crimson"],
    ["orange", "dark orange"],
    ["yellow", "golden rod"],
    ["green", "olive"],
    ["blue", "navy blue"]
]



// const animalPairs = [ // an array
//     ["doe", "stag"], // each element is a sub-array and nested array inside
//     22,
//     true,
//     []
// ]







const animalPairs = [
    ["doe", "buck"],
    ["ewe", "ram"],
    ["peahen", "peacock"]
];

//in the console
animalPairs[2] // peahen, peacock
// and to access the first element we chain them:
animalPairs[2][0] // returns peahen


// update elements:
animalPairs[0][1] = "stag" // changing buck with stag
animalPairs // returns doe, stag, etc.






const animals = [
    ["doe", [ "buck", "stag"] ],
    ["ewe", "ram"]
]

animals[0] // returns doe
animals[0][1] // returns buck, stag
animals[0][1][1] // returns stag
animals[0][1][1] = "STAG!" // change stag to STAG!







const board = [
    ["0", null, "X"],
    [null, "X", "O"],
    ["X", "O", null]
]

