let password = "hello kitty";

if(password.length >= 6) {
   if(password.indexOf(' ') === -1){ // if space is not found we will get -1, that there is no space
      console.log("Valid Password!");
   }
   else {
      console.log("Password is long enough, but cannot contain spaces");
   }
}
else {
   console.log("Password must be longer!");
}