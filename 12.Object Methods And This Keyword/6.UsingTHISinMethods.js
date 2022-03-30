function sayHi() {
   console.log("HI")
   // this refers to the window (
   // global scope object in the browser)
   console.log(this);
}




// Use the keyword this to access other properties on the same object
const human = {
   first: 'Robert',
   last: 'Herjavec',
   fullName() {
      return `${this.first} ${this.last}`
   }
}

person.fullName(); // Robertt Herjavec
person.last = 'Plant';
person.fullName(); // Robert Plant






// const person = {
//    first: 'Cherilyn',
//    last: 'Sarkisian',
//    nickName: 'Cher',
//    // adding method to the object:
//    fullName() { // or fullName: function
//       console.log(this);
//    }
// }



// person.fullName()
// returns:
// first: "Cherilyn"
// fullName: ƒ fullName()
// last: "Sarkisian"
// nickName: "Cher"

// this time THIS is not console.log the window comparing to sayHi
// which is a function, not in an object

// the value in THIS is the object itself - the person object
// it allows us to reference the properties or other methods





// const person = {
//    first: 'Cherilyn',
//    last: 'Sarkisian',
//    nickName: 'Cher',
//    fullName() {
//       console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//    }
// }

// person.fullName() // Cherilyn Sarkisian AKA Cher

// we can write it as:
const person = {
   first: 'Cherilyn',
   last: 'Sarkisian',
   nickName: 'Cher',
   fullName() {
      const {first, last, nickName} = this;
      console.log(`${first} ${last} AKA ${nickName}`);
   }
}

person.fullName() // Cherilyn Sarkisian AKA Cher

person.nickName = 'CHERRR'
person.fullName() // Cherilyn Sarkisian CHERRR







const personNew = {
   first: 'Cherilyn',
   last: 'Sarkisian',
   nickName: 'Cher',
   fullName() {
      // In a method, this refers to the object the method "lives" in:
      const {first, last, nickName} = this;
      return `${first} ${last} AKA ${nickName}`;
   },
   printBio(){
      const fullName = this.fullName();
      console.log(`${fullName} is a person!`);
   }
}

personNew.printBio();
//  we called a method that is located within the same object using THIS
// in that method we actually access 3 different properties using this with destructuring to make it cleaner
// the value of this is refering to the object that they live in