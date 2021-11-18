// ! > && > ||

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x = 7;

x == 7 || x === 3 && x > 10;
// true   || false -> true
//          true &&  false -> false

x == 7 || (x === 3 && x > 10); //true
// true   || false -> true

(x == 7 || x === 3) && x > 10; //false
