// Previous > MoreReturnValues / Functions

// Write a isValidPassword function
// It accepts 2 aruments: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are MediaStreamTrack, return true.value
// Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false


function isValidPassword(password, username) {
    if (password.length < 8){ // we can use && but its not so convenient
        return false;
    }
    if (password.indexOf(' ') !== -1) { // indexOf will give -1 if it's missing
        return false; // we want to be -1 for the password to be valid 
    } // if password indexOf is not a -1
    if (password.indexOf(username) !== -1){
        return false;
    }
    return true;
}



// in a single conditional 
function isPasswordValid(password, username) {
    if(
        password.length < 8 ||   // the other example is when creating them in a variable
        password.indexOf(' ') !== -1 ||
        password.indexOf(username) !== -1
    ) {
        return false;
    }
    return true;
}



function isPassValid(password, username) {
    const tooShort = password.length < 8;  // creating them in a variable
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1; // using them to create a conditional:
    if(tooShort || hasSpace || tooSimilar) return false; // if its true it will return  false
    return true;
}


function isPassValidAgain(password, username) {
    const tooShort = password.length < 8; 
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if(!tooShort && !hasSpace && !tooSimilar) return true; 
    return false;
}


function isPassAnother(password, username) {
    const tooShort = password.length < 8; 
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}
