// Palindrome is a mirror like sequence of numbers, strings or letters
//  NITIN, 123454321, madam

// Check for more: https://www.javatpoint.com/palindrome-in-javascript
// https://www.geeksforgeeks.org/how-to-check-whether-a-passed-string-is-palindrome-or-not-in-javascript/
// https://betterprogramming.pub/algorithms-101-palindromes-8a06ea97af86

// When we read the word madam from the forward and the backward end, it returns the same string.
// Therefore, we can refer to the string or number as the Palindrome.

function validatePalin(str) {  
  
    // get the total length of the words  
    const len = string.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');  
}  

// accept the string or number from the prompt  
const string = prompt('Enter a string or number: ');  
  
const value = validatePalin(string);  
  
console.log(value);  







// Split the word into an array, saving it into a variable.
// Reverse the array.
// Put it back together.
// Compare the initial string to the reversed one.

function checkPalindrome(str){
    let reversed = str.split("").reverse().join("")
    return str === reversed
  }
  let str1 = "anna"
  let str2 = "banana"
  checkPalindrome(str1)
  // -> true
  checkPalindrome(str2)
  // -> false



