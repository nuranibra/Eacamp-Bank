const userName = document.getElementById('user-name');
const userSurname = document.getElementById('user-surname')
const balance = document.getElementById('balance-num-user');
const cartNum1 = document.getElementById('cart-number-1');
const cartNum2 = document.getElementById('cart-number-2');
const cartNum3 = document.getElementById('cart-number-3');
const cartNum4 = document.getElementById('cart-number-4');
const cartUserName = document.getElementById('cart-user-name');
const cartUserSurname = document.getElementById('cart-user-surname');

userName.innerHTML = localStorage.getItem('name');
userSurname.innerHTML = localStorage.getItem('surname');

cartUserName.innerHTML = localStorage.getItem('name');
cartUserSurname.innerHTML = localStorage.getItem('surname');