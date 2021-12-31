// Write a getCard() function which returns a random playing card Object, like:
// {
//     value: 'k'
//     suit: 'clubs'
// }
// Pick a random value from:
// ----- 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A  // because of the letters we have to change it to a string '2', otherwise we can use .random
// Pick a random suit from:
// ----- clubs, spades, hearts, diamonds
// Return both in an object 


// function getCard(){
//     const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
//     'J',' Q', 'K', 'A']; // to pick them randomly from an array we need to generate a random number
//     // that corresponds to an index
//     // Math.random() // gives a decimal then we have to multiply it to:
//     const valInx = Math.floor(Math.random() * values.length); // .floor removes the numbers after the , when decimal
//     const value = values[valInx]; // to show them by their values, not the index

//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const suitInx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitInx]; // suits of suitInx
//     // console.log(value, suit);
//     return { value: value, suit: suit }; // return an object // key: value
// }


function pickRandom(arr){
    // return random element from arr
    const inx = Math.floor(Math.random() * arr.length);
    return arr[inx];
}

function getCard(){
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J',' Q', 'K', 'A'];
    //  const value = pickRandom(values);

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    // const suit = pickRandom(suits);
    //return { value: value, suit: suit }; 
    return { value: pickRandom(values), suit: pickRandom(suits) };
}

// Next > FunctionScope / Functions