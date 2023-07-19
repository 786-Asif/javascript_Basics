// object oriented programming

// constructor function and new operator
// we can not use arrow function as constructor 
// cal constructor function using "new" keyword.

// 1 new {object} created empty initially
// 2 "this" = {object}
// 3 object link to prototype
// 4 functional automatically return {object}.

let Car = function(color,model){
    this.color=color;
    this.model=model;
}

// prototype
Car.prototype.startEngine = function(){
    //console.log('this is the start engine');
}
//console.log(Car.prototype)

//we can also set the properties to the prototype
Car.prototype.company = 'Honda';
//console.log(Car.prototype);

let instanceOfcar = new Car("Black",2023);
//console.log(instanceOfcar);
let instance = new Car("Blue",2023);
//console.log(instance);

// Array prototype.
let arr = [1,2,3,4,5];
//console.log(arr.__proto__);

// ES6 classes 
//class  declaration
//parent class
class bike {
    constructor(color,model){
        this.color=color;
        this.model=model;
    }
    startEngine(){
       // console.log('this is start engine method of class car');
    }
    get _startEngine(){
        //console.log('this is start engine method using get');
    }
    set changeColor(color){
        //console.log(this.color=color);
    }
}
let pulsar = new bike('Black',2023);
console.log(pulsar);
//pulsar.startEngine();
// important point
// classes are not Hoisted
// classes are also first class citizen(pass as an argument)
// classes are executed in strict mode

// setter and getter method
pulsar._startEngine;
pulsar.changeColor = "Red";

//class inheritence(sub class)
// child class
class Bike extends bike{
  constructor(color,model,engineCapacity){
    super(color,model);
    this.engineCapacity=engineCapacity;
  }

}
let newBike = new Bike('Green',2023,"125cc");
console.log(newBike);

//







