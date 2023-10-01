const totalPaymentNum = document.getElementById('totalPaymentNum');
const totalPaymentInp = document.getElementById('salary-input');
const monthlyInterestNum = document.getElementById('monthlyInterestNum');
const monthlyInterestInp = document.getElementById('month-input');

totalPaymentInp.addEventListener('change',function(e){
    if(totalPaymentInp.value <= 0){
        totalPaymentNum.innerHTML = 0
    } else {
        totalPaymentNum.innerHTML = totalPaymentInp.value
    }
})