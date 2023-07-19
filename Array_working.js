//working with the Array(simple method).
let letters = ['a','b','c','d','e'];
//console.log(letters);

// reverse the Array(mutated)
// let rev= letters.reverse()
// console.log(rev);
// console.log(letters);

// concatenate
let number = [1,2,3,4,5];
// let concatinate = number.concat(letters);
// console.log(concatinate);

//join
let joined = letters.join('-->');
//console.log(joined);

//slice
let slicedArray = number.slice(1,4);
// console.log('Original Array :',number);
// console.log('Sliced Array :',slicedArray);

//Splice method
// Array.splice(index,value delete(you also put 0 here means no delete only add),value add).
let update = number.splice(1,1,6);
// console.log('original array :',number);
// console.log('updated array :',update);

//At method
let friend = ['Asif','Sujji','Anshu','Rachit','Bhagwan ji','Shriyans','Hritik','Nissi','Pinchu','Pratyush','Sarry'];
//console.log(friend.at(1));
//console.log(friend.at(-1)); // for last index

//Map method
// create new array from original array by applying transformation function
let salaries = [20000,30000,40000,50000,60000];
let newSalaries = salaries.map(salary =>{
    let bonus = salary/2;
    return salary+ bonus;
})
//console.log(salaries);
//console.log(newSalaries);

// filter method
let gifts = ['watch','ring','doll','teddy-bear','car'];
//now you want to filter only watch and ring gift.
let filterArraay = gifts.filter(gift=>{
    if(gift == 'watch' || gift == 'ring')
    {
        return true;
    }
})
//console.log(filterArraay);

//reduce method
let num = [10,20,30,40,50];
let sum = num.reduce (function(total,currentValue){
  return total + currentValue;
});
//console.log(sum);

//find methods
// it returns the first element we are looking for
let students = [{id:4,name:'Mohammad Asif'},{id:23,name:'Anshumat'},{id:55,name:'Sujal'}];
let result = students.find(student=>{
    return student.id === 4;
})
//console.log(result);

//find index method
let ages = [12,13,14,20,25];
let index = ages.findIndex(age=>{
    return age >20;
})
//console.log(index);

//flat method
let flatArray = [1,2,3,[4,5,[6,7,[8,9]]]];
let flatResult = flatArray.flat(3);
//console.log('Array before flating :',flatArray);
//console.log('Array after falting :',flatResult);

//flatmap method
// for addding more items in array successfully
let Flatmap = [{
    name:'mobile',
    quan:2,
    company:'samsung'
},
{
    name:'tablet',
    quan:1,
    company:'Apple'
}];

let FlatmapResult = Flatmap.flatMap(item=>{
    if(item.name ==='mobile')
    {
        return [item,{
            name:'screen protector',
            quan:1,
            company:'samsung'
        }];
    }
    else{
        return [item];
    }
});
//console.log(FlatmapResult);

//Sorting in Array
let str = ['f','e','b','a','k'];
//console.log(str.sort());
let integer = [20,10,5,-10,-12,-20];
//ascending order
integer.sort((a,b)=>{
    return a-b;
})
console.log(integer);
//for decsending order do(b-a);

//




