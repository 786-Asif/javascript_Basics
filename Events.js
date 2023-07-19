// Event basics (click event)
let elements = document.querySelectorAll('li')

elements.forEach(function(element){

    element.addEventListener('click',function(e){
       // console.log('item clicked');
    //    console.log(e.target);
    //    e.target.style.textDecoration='line-through';
    e.target.remove();
    })
})

// create and remove element from the list
// create
const ul = document.querySelector('ul')
let button =document.querySelector('.click')
button.addEventListener('click',function(){

    let li = document.createElement('li');
    // li.textContent='new items added';
    // ul.append(li);
    // for adding at top use prepend
})

//Copyright Event
let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy',()=>{
    console.log('Ooops! You can not copy this item');
})

// Mouse move Event
let Box = document.querySelector('.box');
Box.addEventListener('mousemove',(e)=>{
    console.log(e.offsetX,e.offsetY);
})

// 


