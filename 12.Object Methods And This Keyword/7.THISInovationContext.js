// THIS: Invocation Context

// Tha value of this depends on the invocation context
// of function it is used in.

// a.k.a the value will changed depends of the function is actually executed
// not just where you write it



const person = {
   first: 'Cherilyn',
   last: 'Sarkisian',
   nickName: 'Cher',
   fullName() {
      // In a method, this refers to the object the method "lives" in:
      const {first, last, nickName} = this;
      return `${first} ${last} AKA ${nickName}`;
   },
   printBio(){ // traditional function
      console.log(this);
      const fullName = this.fullName();
      console.log(`${fullName} is a person!`);
   },
   //keyValue:
   laugh: () => {
      console.log(this); // its reference to the global scope to the Window
      // and we wont have access to the parent object to do things like reference properties
      console.log(`${this.nickName} says HAHAHAHHA`);
   }
 }

// we can do a reference to printBio function and call the method like this
const printBio = person.printBio;
// so we are pointing the printBio variable to the person.printBio function
printBio() // returns is not a function
// so we add console.log(this); before the error which will reference the window


// object . method name
person.printBio() // will refer to the object

// so if there is something to the left (person), then dot . and then executing the function (printBio)
// this will be set to the thing to the left,
// if we are just calling printBio, This will be set to the global execution scope the Window



// ARROW FUNCTIONS
// difference between a regular function and an arrow function
// is that arrow functions do not get their own version of This

// person.laugh()
// will return: undefined says HAHAHAHHA
// usually we dont use arrow functions as methods in an object
