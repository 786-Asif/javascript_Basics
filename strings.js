// string is a data type
// console.log('hello');

let firstName = 'Mohammad';
let lastName = 'Asif';

// concatinating string.
//console.log(firstName,lastName);

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// using template literals
// use  backtick.
let fullName = `hello dear ${firstName} ${lastName}`;
//console.log(fullName);

// getting string character
// console.log(fullName[2]);
// console.log(fullName[20]);

//string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//common string methods.
// let sujal = '    sujal is smart boy of iiit Nagpur    ';
// console.log(sujal);

// now we use trim method to trim the space 
// let Sujal = sujal.trim();
// console.log(Sujal);

// include method
console.log(fullName.includes('sujal'));
console.log(fullName.includes('Asif'));

//Split method
let colors = 'brown black red blue green';
//string to array conversion.
let arrColors = colors.split(' ');
console.log(arrColors);

//string are immutable
// let str = 'hello';
// console.log(str);
// str[0]="S";
// str[1]="u";
// console.log(str);





