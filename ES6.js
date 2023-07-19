//  ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript,
// and ES6 is the 6th version of ECMAScript, it was published in 2015,

// -->> Destructuring the array <<--
let hotel = {
    name : "Royal chicken",
    Location : " Dhanmandi, Kota, Rajasthan",
    categories : ["Non-veg","Chinese","Italian"]
};
//let [first,second]=hotel.categories;
//console.log(first,second);
// for skipping 
let [first, ,third]=hotel.categories;
//console.log(first,third);

// switching 
[third,first]=[first,third];
//console.log(first,third);

//Enhance object Literals
// before ES6 vs After ES6
let menuType ="Platinum Menu";

// -->> destructuring of object <<--
// let openingHours={
//     sunday :{open:"09:00 AM",close:"11:00 PM"},
//     monday: {open:"10:00 AM",close:"12:30 AM"}
// }

let hotels = {
    Name : "Royal Firdous",
    Location : " Dhanmandi, Kota, Rajasthan",
    categories : ["Non-veg","Chinese","Italian"],
    mainMenu : ["butter-chicken","chilli-chicken","chicken-bhuna","chicken-changezi"],
    //openingHours,
    openingHours:{
        sunday :{open:"09:00 AM",close:"11:00 PM"},
        monday: {open:"10:00 AM",close:"12:30 AM"}
    },
    [menuType]:["Different food items..."]
};
//console.log(hotels);
//let {Name,Location,mainMenu}=hotels;
//console.log(Name,Location,mainMenu);

//-->> Destructuring the nested values. <<--
//let {Name,openingHours}=hotels;
//console.log(Name,openingHours);

// let{sunday}=openingHours;
// console.log(sunday);

 //let{monday:{open,close}}=openingHours;
// console.log(open,close);

// -->> spread operators <<--
let arr = [3,4,5,6,7];
let newArr = [1,2,...arr];
// console.log(arr);
// console.log(newArr);
let updatedMenu = ["shahi-chicken","kadhai-chicken",...hotels.mainMenu];
//console.log(updatedMenu);

//create shallow copy using the spread operator
let copyArray = [...updatedMenu];
copyArray[0]= "Chicken-rara";
//console.log(copyArray);

// Short circuiting
// Falsy value -> 0,false,null,undefined,"".
// AND(&&) operator 
let result = 5000 && "coder";
//console.log(result);
// OR(||) operator
let res = 'Programmer'||'coder';
//console.log(res);

//For-of loop
let menu =[...hotels.mainMenu];
for(let [i,item] of menu.entries()){
    //console.log(`${i+1}:${item}`);
}

//let we want to check the hotel open on saturday or not
//if open then at what time
//console.log(hotels.openingHours.saturday);
// to avoid this error we have two methods

// 1> withaout optional chaining
// if(hotels.openingHours.saturday.open)
// {
//    // console.log(hotels.openingHours.saturday.open);
// }

// 2> with optional chaining
//console.log(hotels.openingHours.saturday?.open);

//Sets in js
let setArr = new Set([1,2,3,4,5,6,7,8]);
// console.log(setArr);
// console.log(setArr.size);
// console.log(setArr.has(7));
// it will not add duplicate values

// MAP it is similar to object
let restaurantMap = new Map();
restaurantMap.set('name',"Bombay Hotel");
restaurantMap.set(1,"Address->1");
restaurantMap.set(2,"Address->2");
console.log(restaurantMap);

//



