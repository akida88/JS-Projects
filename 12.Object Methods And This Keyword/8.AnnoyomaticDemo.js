// ANNOYOMATIC DEMO

const annoyer = { // the way to structure it is using an object annoyer
   phrases: ["literally", "cray cray", "I can't even", // adding phrases as a key to the object
   "Totes!", "YOLO", "Can't Stop, Won't Stop"],
   pickPhrase(){ // shorthand usage of a function
      // const phrases = this.phrases    // destructured is:
      const {phrases} = this;
      const idx = Math.floor(Math.random() * phrases.length) // this will give a random index from the phrases array
      // to access it out of phrases using that index  which will be returned
      return phrases[idx]
   },
   // start: function() { // creating a method start which will be a function, shorthand will be start(){}
   //    // console.log(this.pickPhrase())
   //    var that = this; // we have reference to the object
   //    setInterval(function () {
   //       // console.log("DSADSDAfFSD")
   //       console.log(that); //the that is reference to the previous this from the start function
   //       console.log(this.pickPhrase()) // if we want to have reference to the object we store it in a variable
   //    }, 3000) // 3000 = seconds
   // } // to make it easier we use arrow function:
   start() {
      // this; // will reference the object // but arrow functions dont get their own this
      this.timerId = setInterval(() => { // we cant use variable because it will be available only in this method
         console.log(this.pickPhrase())
      }, 3000)
   },
   stop() {
      clearInterval(this.timerId);
      console.log("DONE!");
   }
}
// using these words will be printed in the console every few milliseconds

// to use this:
// annoyer.start()
// annoyer.stop()
// we gonna use a build in function called setInterval

// we need to set:
// setInterval(func, interval)