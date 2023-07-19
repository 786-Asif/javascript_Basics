// conversion of number to string 
// conversion of string to number
// number to boolean etc.

let num=6;
console.log(num,typeof num);

let num1=String(6);
console.log(num1,typeof num1);

let x=8;
console.log(x,typeof x);

x=x+"";
console.log(x,typeof x);

x=x-2;
console.log(x,typeof x);

// null ,0, undefined these all are falsy value.
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(undefined));

// all numbers are true except 0;
console.log(Boolean(1));
console.log(Boolean(10));
console.log(Boolean(100));

// parseint function is used to convert a string in to a number.
let str= parseInt("123 Mohammad Asif");
console.log(str);



