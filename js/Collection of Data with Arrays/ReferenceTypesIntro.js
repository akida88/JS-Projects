// storing a value in a variable
// having a string variable called fruit
 let fruit = "orange"; // orange -> a reference in a memory

 let color = fruit; // fruit is storing the value of orange, color is also storing the same value

 // then we change fruit to:
 fruit = "watermelon" // but color is still orange

// they are not linked because they are primitive types





let nums = [5,6,7,8];
let otherNums = nums;

nums.push(9) // returns 5
otherNums // returns 5,6,7,8,9


// updating num does not change the value stored in nums,
// it just use the reference to find that array and update it



// ARRAYS ARE REFERENCE TYPES
// THAT MEANS THAT THE ACTUAL DATA IS NOT THE CONTENT THAT IS STORED IN THE MEMORY
// FOR EACH VARIABLE, INSTEAD IT IS A REFERENCE 
// IF THE REFERENCE DOES NOT CHANGE THE INSIDES OF THE ARRAY CAN'T BE CHANGED