// Asynchronous javascript.
// Async code example.
// console.log("Asif");
// console.log("Sujal");
setTimeout(()=>{
    //console.log("This function will call after 3 sec");
},3000);
// console.log("Rachit Gupta");
// console.log("Anshumat");

// Asynchronous javascript
// Making HTTP request (AJAX).
// let request = new XMLHttpRequest();
//console.log(request);

// //set up request
// request.open("Get",'https://jsonplaceholder.typicode.com/todos');

// // sending the request
// request.send();

// fro reading the request data
// value state description
// 1 open() has been called
// 2 send() has been called
// 3 responsText holds partial data (loading)
// 4 the operation is completed
// request.addEventListener('readystatechange',()=>{
//     //console.log(request,request.readyState)
//     if(request.readyState == 4 && request.status ==200)
//     {
//         console.log(request,request.responseText);
//     }
//     // now we will use callback function for getting the information of the  error function.
// })
// HTTP response status code
// informational response (100-199)
// successfull response (200-299)
// redirection message (300-399)
// client error response (400-499)
// server error response (500-599)

// using callback function
// let todos = (callback)=>{
//     let request = new XMLHttpRequest();
   
//     request.addEventListener('readystatechange',()=>{
//         //console.log(request,request.readyState)
//         if(request.readyState == 4 && request.status ==200)
//         {
//             //console.log(request,request.responseText);
//             // to convert data from string ti array use parse method
//             let data = JSON.parse(request.responseText);
//             callback(undefined,data);
//         }
//         else if(request.readyState==400){
//            // console.log("Data could not fetch");
//            callback('Data could not fetch');
//         }
        
//     })
//     //set up request
//      //request.open("Get",'https://jsonplaceholder.typicode.com/todos');
//       request.open("Get","data.json");

//      // sending the request
//     request.send();

// }

// console.log("Asif");
// console.log("Sujal");

// // Asynchronous data. (take some time)
// todos((error,Data)=>{
//     if(error){
//         console.log(error);
//     }
//     else
//     {
//         console.log(Data);
//     }
// });

// console.log("Rachit Gupta");
// console.log("Anshumat");

// -->> Promise <<--
// let todos = (resource)=>{
    
//     return new Promise((resolve,reject)=>{

//         let request = new XMLHttpRequest();

//         request.addEventListener('readystatechange',()=>{
//             //console.log(request,request.readyState)
//             if(request.readyState == 4 && request.status ==200)
//             {
//                 //console.log(request,request.responseText);
//                 // to convert data from string ti array use parse method
//                 let data = JSON.parse(request.responseText);
//                 resolve(data);
                
//             }
//             else if(request.readyState==400){
//                // console.log("Data could not fetch");
//                 reject("Data could not fetch");
              
//             }
            
//     })
//      //set up request
//      //request.open("Get",'https://jsonplaceholder.typicode.com/todos');
//      request.open("Get",resource);

//      // sending the request
//     request.send();
   
//     })
   
// }
// todos("data.json").then((data)=>{
//     console.log("promise 1st resolved",data);

//     return todos("dataa.json")
// }).then((data)=>{
//     console.log("promise 2nd resolved",data);

//    return todos("dataaa.json")
// }).then((data)=>{
//     console.log("promise 3rd resolved",data);

// }).catch((error)=>{
//     console.log(error);

// }).catch((error)=>{
//     console.log(error);

// }).catch((error)=>{
//     console.log(error);
// })


// let getSomething = ()=>{
//     return new Promise((resolve,reject)=>{
//         //resolve("getting the data");
//         // reject("getting the error");
//     });
// }
// getSomething().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// <<-- Fetch API -->>

// fetch("data.json").then((Response)=>{
//     console.log("promise resolved",Response);

//     return Response.json()
// }).then((data)=>{
//     console.log(data);

// }).catch((error)=>{
//     console.log(error);

// }).catch((error)=>{
//     console.log(error);
// })

// Async and await method , try and catch method

let getTodos = async()=>{

    try{

        let response = await fetch('data.json');
    // custom error
    // if(response.status !== 200)
    // {
    //     throw new Error("custom : Error in fetching the data");
    // }
     let data = await response.json();
     let response2 = await fetch('dataa.json');
     let data2 = await response2.json();
    //return data;
    console.log(data,data2);
    }

    catch(error){
        console.log(error.message);
    }
    
}
getTodos();

// getTodos().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });







