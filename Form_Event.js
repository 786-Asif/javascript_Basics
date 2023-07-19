// Form events
let form = document.querySelector('.sign-up-form');
console.log(form);
form.addEventListener('submit',(e)=>{
  e.preventDefault();
    console.log('successfully submitted');
   console.log(form.email.value,form.password.value);
    
})

//Regular Expression (Rejex).
// password validation
// length at least 8.
// at least contain one upper case letter
// at least contain one lower case letter
// at least contain one digit b/w (0,9).
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    if(passwordPattern==passwordPattern)
    {
        console.log('Your password is strong');
    }
    else{
        console.log('Your password is not strong');
    }
});

//live feedback
let userEmail = "^(?=.*?[A-z])(?=.*?[a-z).{10,}$";
 email.addEventListener('keyup',(e)=>{
    if(userEmail.test(e.target.value)){
        User.setAttribute('class','success');
    }
    else{
        user.setAttribute('class','error');
    }
})

//






