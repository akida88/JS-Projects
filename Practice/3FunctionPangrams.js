// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, whick checks to see if a given sentence
// contains every letter of the alphabet. Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') // true
// isPangram('The five boxing wizards jump quick') // false


function isPangram(sentence) {
    // create equal string casing
    let lowerCased = sentence.toLowerCase();
    // loop over every letter in the alphabet and check if the letter is in the sentence
    for( let char of 'abcdefghijklmnopqrstuvwxyz') {
        // console.log(char); // it shows all the letters
        // check if the letter is in a sentence
        if(lowerCased.indexOf(char) === -1) { // sentence can be used instead of lowerCasec if we dont have it
            return false;
        }
    }
    return true;
}


function isPangr(sentence) {
    let lowerCased = sentence.toLowerCase();
    for( let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!lowerCased.includes(char)) { 
            return false; // returns false if the string does not include it
        }
    }
    return true;
}

