// Local Storage
//console.log(window);

// set item
localStorage.setItem('Name',"Asif");
localStorage.setItem('Age',20);
localStorage.setItem('RollNo',"Bt21ece004");
//console.log(localStorage);

// get item
//console.log(localStorage.getItem('Age'));

// update item
localStorage.setItem("Age",21);
//console.log(localStorage);

// remove item
localStorage.removeItem("Age");
//console.log(localStorage);

//How to store complex structure
// like array of object
// ultimetly in local storage data stored in the form of string 
let student = [
    {name:"Mohammad Asif",Rollno:"Bt21ece004"},
    {name:"Rachit Gupta",Rollno:"Bt21ece064"}
];
let ObjectToString = JSON.stringify(student);
//console.log(ObjectToString);
localStorage.setItem('student',ObjectToString);
//console.log(localStorage);

let storeData = localStorage.getItem('student');
let objectFormatData = JSON.parse(storeData);
//console.log(objectFormatData);

//







