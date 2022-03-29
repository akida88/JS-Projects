const math = {
   blah: 'Hi!', // we need the , to separate the properties
   add(x, y) { // add is the name which is used to create the key
      return x + y;
   },
   multiply(x, y) {
      return x *  y;
   }
}
math.add(50,60) // 110


// We do this so often that there's a new shorthand way of adding methods.
// for shorthand we dont need the key : value anymore

const auth = {
   username: 'TommyBot',
   // login: function() {
   //    function expression     // no need of this
   // }
   // login: () => {             // nor this
   //    console.log()
   // }
   login() {                     // a lot shorter
      console.log("Logged you in!")
   },
   logout() {
      console.log("Goodbye!")
   }
}

// auth:
// key: the function that corresponds to it as value
// login: ƒ login()
// [[Prototype]]: Object

