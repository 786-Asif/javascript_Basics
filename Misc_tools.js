// Mordern javascript module , and Tooling
// Exporting and Importing Modules
// import {dishes} from './array.js'
// console.log(dishes);

//function 
//Closures
//closure means 'inner' function has an access to the variables 
// and parameters of the 'outer' function even after outer function has returned.
let outerFunc = function(){
    let outerVar = "Outer variable";
    let innerFunction = function(){
        console.log(outerVar);
    }
    return innerFunction;
}
let innerFunc = outerFunc();
innerFunc();

// closure does not seperate copy of outr variable
// it just reference them
let counter = function()
{
    let count = 0;
    let innerCount = function(){
        return count = count +1;
    }
    return innerCount;
}
let innerCounter = counter();
console.log(innerCounter());
console.log(innerCounter());




