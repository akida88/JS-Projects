// similar to accessing data (see accessingObjectProperties.js)

// we use a = sign to assign a value either to update that value or give it an initial value

const userReviews = {}; // an empty object

userReviews['Akida88'] = 4.0; // {Akida88: 4} key: value

userReviews.mrSmith78 = 3.5; // calling userReviews shows the result: {Akida88: 4, mrSmith78: 3.5}
userReviews.Key = "Value"; // take this key and put this value

userReviews.colt = '5';
// to UPDATE we use the same thing:
userReviews['colt'] = 5; // changing it to the number 5


// adding to a value
userReviews['Akida88'] += 2; // updates 4 to 6
userReviews.mrSmith78++; // updates 3,5 to 4,5


// we mostly use the DOT notation and [] square brackets SYNTAX for 1. accessing a property
// that's already there, 2. accessing and updating it, or 3. setting it for the first time