"use strict"

const ad = document.querySelector('#name');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordAgain = document.querySelector('#password-again');
const adText = document.querySelector('#name-fail');
const surnameText = document.querySelector('#surname-fail');
const emailText = document.querySelector('#email-fail');
const passwordText = document.querySelector('#password-fail');
const passwordAgainText = document.querySelector('#password-again-fail');
const warning = document.querySelector('.warning');
const btn = document.querySelector('#btn');
const iAgree = document.querySelector('#i-agree')
const laungauge = document.querySelector('#laungauge-list');

function buttonOver (){
        var xpos = parseInt(Math.random()*60)
        btn.innerHTML = "ahah"
        document.getElementById('btn').style.marginLeft = xpos + "%";
}

password.addEventListener('click',function(){
    document.getElementById('warning-con').className = 'none';
})

btn.addEventListener('mouseover',function(){
    if(ad.value.length >= 3 && ad.value.length <= 10){
        adText.style.color = "green";
        adText.innerHTML = 'Adınız uyğundur';
        if(surname.value.length >= 3 && surname.value.length <= 10){
            surnameText.style.color = "green";
            surnameText.innerHTML = "Soyadınız uyğundur";
            if(email.value.endsWith('.com') && email.value.length >= 10){
                emailText.style.color = "green";
                emailText.innerHTML = "E-mailiniz uyğundur";
                    if(password.value.length >= 8){
                        passwordText.style.color = "green";
                        passwordText.innerHTML = "Parolunuz uyğundur";
                        if(passwordAgain.value.length >= 8 && password.value === passwordAgain.value){
                            passwordAgainText.style.color = "green";
                            passwordAgainText.innerHTML = "Parolunuz düzdür"
                            if(iAgree.checked){
                                btn.style.cursor = "pointer";
                                localStorage.setItem('name',ad.value.trim());
                                localStorage.setItem('password',password.value.trim());
                                btn.addEventListener('click',function(){
                                    window.location.href = './../pages/login.html';
                                })
                            } else {
                                alert('Şərtləri qəbul edin!!!')
                            }
                        } else {
                            passwordAgainText.style.color = "red"
                            passwordAgainText.innerHTML = 'Parolunuz yanlışdır'
                        }
                    } else {
                        passwordText.style.color = "red"
                        passwordText.innerHTML = 'Parolunuz 8 simvoldan uzun olmalıdır'
                        buttonOver()
                    }
            } else {
                emailText.style.color = "red"
                emailText.innerHTML = 'E-poçtunuz etibarlı deyil'
                buttonOver();
            }
        } else {
            surnameText.style.color = "red"
            surnameText.innerHTML = 'Soyadınız 3 simvoldan uzun və 10 simvoldan az olmalıdır'
            buttonOver();
        }
    } else {
        adText.style.color = "red"
        adText.innerHTML = 'Adınız 3 simvoldan çox və 10 simvoldan az olmalıdır';
        buttonOver();
    }
})