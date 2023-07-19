// date and time 
//let date = new Date();
//console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

//Digital Clock

let hrs = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');

let digClock = function()
{
    let CurrDate = new Date();

    let getHrs = CurrDate.getHours();
    let getMin = CurrDate.getMinutes();
    let getSec = CurrDate.getSeconds();

    hrs.textContent = getHrs;
    min.textContent = getMin;
    sec.textContent = getSec;
}
//setInterval(digClock,1000);

//


