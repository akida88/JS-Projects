// Prev> DestructingObjects.js / JS Features


// array with objects
const results = [{
      first: "Eluid",
      last: "Kopchoge",
      country: "Kenya",
   },
   {
      first: "Feyisa",
      last: "Lilesa",
      country: "Ethiopia",
   },
   {
      first: "Galen",
      last: "Rupp",
      country: "United States"
   }
]


// estract the country from the second object
// const [,{country}] = results; // using {} because its an object
// the , skips the first element


// extract and change the value
// using nested structure
const [{first: goldWinner},{country}] = results;
// so calling goldWinner will return Eliud
// calling country will return Ethiopia


// can be used this: if we want to open country again
// const [,silverMedal] = results; // silverMedal returns the second object
// const {country} = silverMedal; // looks for country in the second object
//[,silvermedal]= results === const silvermedal=results[1]




// Next> Destructuring Parameters / JS Features