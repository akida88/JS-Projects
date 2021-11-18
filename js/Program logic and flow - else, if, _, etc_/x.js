// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.
function centuryFromYear(year) {
   return Math.ceil(year/100)
}
console.log(centuryFromYear(2000)) // better than return Math.floor(year/100+1)
// https://www.quora.com/What-are-two-differences-between-Math-ceil-and-Math-floor-in-Java

//

let pass = "iwantcandy";

if (pass.length >= 6) {
   if (pass.indexOf(' ') === -1 ) {
      console.log("Perfect pass");
   }
   else{
      console.log("Pass should not include spaces");
   }
}
else {
   console.log("Invalid pss");
}