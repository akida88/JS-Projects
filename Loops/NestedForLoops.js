let str = "LOL";
for (let i  = 0; i <=4; i++){
   console.log("Outer:", i);
   for (let j = 0; j < str.length; j++) {
      console.log("  Inner:", str[j]);
   }
}



for(let a = 1; a <= 10; a++){
   console.log("Outer loop:", a);
   for(let b = 5; b >= 0; b -= 2){
      console.log("    Inner loop/nested", b)
   }
}