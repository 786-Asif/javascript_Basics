// functions in javascript
function funcName(){
    console.log('Hello dear friend');
}
funcName();

// function expression anonymous function
let fun=function(){
    console.log('This is function expression');
}
fun();

//passing value (argument and parameters)

let invitation = function(name,time){
    console.log(`Welcome 👋 ${name} you are invited in the ${time}`);
}
invitation('Sujal','morning');

//returning values
let yourAge = function(birthYear,currentYear=2023){
    age = currentYear-birthYear
    return age;
}
console.log('Your current age is',yourAge(2003));

//Arrow function (ES6).
// special form of function expression 
// no need to use functrion key word
// no need to use parantheesis in case of single parameter.

let friendName = name =>{
    return `Friend name is : ${name}`;
}
console.log(friendName('Rachit Gupta'));

//  passing function as an argument 

let upper = function(str){
    return str.toUpperCase();
}

let lower = function(str){
    return str.toLowerCase();
}

let transform = function(str,fun){
    return fun(str);
}
console.log(transform('Anshumat',upper));

//immediately invoked function expression (iife)
(function(name){
    console.log('This function will never execute again',name);
})('IIFE');


//  SetTimeout  and  SetInterval.
function greeting(){
    console.log('it will take some time');
}
setTimeout(greeting,4000);

// Hoisting
// variable  declaration are Hoisted toward top of their scope.
// it work for function declaration 

test();
function test(){
    console.log('Hello bhagwan ji');
}

// hoisting does not work for arrow function and function expression
// hoisting();
// let hoisting = function(){
//     console.log('hello hritik');
// }

//






