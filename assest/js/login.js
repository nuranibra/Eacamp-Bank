const emailLogIn = document.getElementById('email-log');
const fail = document.querySelector('#fail')
const passwordLogIn = document.getElementById('password-log');
const agreeLogIn = document.querySelector('#i-agree-log');
const btnLogIn = document.querySelector('#btn-log');

var emailLog = localStorage.getItem('email');
var passwordLog = localStorage.getItem('password');

var failedLogIn = new Error('There was a problem logging in');

passwordLogIn.addEventListener('click',function(){
    document.getElementById('warning-con').style.display = "none"
})

btnLogIn.addEventListener('mouseover',function(){
console.log(emailLogIn.value);
console.log(passwordLogIn.value);
   if(emailLog === emailLogIn.value && passwordLog === passwordLogIn.value){
        window.location.href = "./../../pages/main.html"
   } else {
        fail.innerHTML = "Your email address or password is incorrect";
        fail.style.color = "red";
        throw failedLogIn;
   }
});