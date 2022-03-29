// COMPUTED PROPERTIES

// improvement for the object literal syntax where we can add a property with a dynamic key


const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2 = 'James Cameron'


// const team = {
//    role: person // we will end up with the key of role: -> team > role: Jools Holland
// }

// const team = {};
// team[role] = person;
// // team > host: Jools Holland
// team[role2] = person2;
// // team > host: Jools Holland, director: James Cameron



// defining the object
const team = {
   [role]: person,
   [role2]: person2,
   [1+6+9]: 'sixteen' // more complex expression
}
// all the properties are in the object
// team > 16: sixteen, host: Jools Holland, director: James Cameron



// We can use a variable as a key name in an object literal property
const user ='Jools';

const userRoles = {
   [user]: 'Admin'
}
userRoles; //{Jools:'Admin'}





// making a function that accepts an object and will return a copy
// of that object with a new property added in
// function addProp(obj, k, v){
//    const copy = {...obj};
//    copy[k] = v;
//    return copy;
// }


// rewriting the code using computed properties:
const addProp = (obj,k,v) => {// using an arrow function
   return {...obj, [k]: v}
}



// res returns:
// 16: "sixteen"
// Director: "James Cameron"
// happy: ":)"
// host: "Jools Holland"

// we can return this using implicit return when we dont use the return keyword and the {}
// const addProp = (obj,k,v) => {...obj, [k]: v}
// but the {} looks like it is a function and can't understand that we want to implicitly return an object
// so we need the ()
const addProperties = (obj,k,v) => ({...obj, [k]: v})
const res = addProp(team, 'happy', ':)')


// use for a computed property
// when creating functions that return objects or add things into objects
// is common to add a dynamic key in
// we can use [] inside the object definitions