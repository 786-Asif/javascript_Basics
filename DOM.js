// DOM (document object Model).
//created by browser as the html load into the browser
// In document object there is a model of complete html in tree like structure.

// getting html element using the querySelector/All.
//querySelector return the first element that match css selector
// to get all matched elements we use queryselectorAll.
let result = document.querySelector('.coders');
console.log(result); // see result in console.

//access element with id
let res=document.getElementById('code');
console.log(res);

// updating and changing content
// innertext it ignore space.
let heading = document.querySelector('h1');
console.log(heading.innerText);

// innerhtml it include space.
console.log(heading.innerHTML);
// modify or add new text.
let content = document.querySelector('.content');
content.innerHTML += '<h2>Hello ninja coder</h2>'

// getting and setting attribute of element.
let gfgLink = document.querySelector('a');
console.log(gfgLink.getAttribute('href'));

gfgLink.setAttribute('href','https://www.codingninjas.com/');
console.log(gfgLink.getAttribute('href'));
gfgLink.innerText = 'Coding Ninjas';

//Adding the style.
let heading1 = document.querySelector('h1');
heading1.style.color = 'red';
heading1.style.backgroundColor='cyan';

//add ,remove,replace the class of element
// Add class.
let newClass = document.querySelector('h1');
newClass.classList.add('newclass');
// Remove class
newClass.classList.remove('newclass');
// replace class.
let replace = document.querySelector('.coders');
replace.classList.replace('coders','coding');

//Parent .children and siblings Elements.
let parentElement = document.querySelector('.parent');
console.log(parentElement);
// for children
console.log(parentElement.children);









