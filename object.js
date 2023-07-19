// introduction to the object in javascript 
let car ={
    color:'Blue',
    model:'2023',
    company:'TATA'
};
console.log(car);
// console.log(car.color);
// console.log(car.company);
// console.log(car.model);

//Modify the object
car.color='red';
console.log(car);

//console.log();
//delete property of object
let obj = {
    obj1:'doll',
    obj2:'car',
    obj3:'gun'
}
console.log(obj);
delete obj.obj2;
console.log(obj);

//console.log();
// methods --->> methods are nothing but object property(key) holding function as "value".
let person = {
    
       currentAge:function(birthYear){
        age = 2023 - birthYear;
        return age;
       }
}
console.log('Your present Age is :',person.currentAge(2003));

//console.log();
// This keyword.
// this keyword represents the object  "calling" the "method" in which "this" is  "present".
let Person = {
    firstName:'Mohammad',
    lastName:'Asif',
    birthYear:'2002',
    city:'Kannauj',
    education:'Engineer',
    getsummary:function(){
        return `${this.firstName} ${this.lastName} was born in ${this.birthYear} and he lives in ${this.city} and he is a/an ${this.education}`
    }
}
console.log(Person.getsummary());

//forEach method of array.
// it's another type of loop which we use to traverse over the array
let dishes = ['Biryani','mutton','chicken'];
dishes.forEach(function(element){
    console.log(element);
})

// objects inside the array
let blockList = [{userName:'John',reason:'Abusive content'},{userName:'Paul',reason:'Copyright content'}];
console.log(blockList);

// math object  built in object  in javascript
let number = 7.8;
console.log(Math.round(number));

// Bind method
function greet(){
    console.log(`Welcome! ${this.name} to ${this.place}`);
}
let user = {
    name:'sujal',
    place:'IIIT Nagpur'
}

let greets = greet.bind(user);
greets();

// "objects/arrays" how reference are passed to variable.
let arr = [1,2,3,4,5];
let getarr = arr;
// console.log(getarr);
// getarr[5]=6;
// console.log(arr);

// pass by value
let getValue = [...arr];
getValue[5]=6;
console.log('original arr :',arr);
console.log('grtValue array :',getValue);





