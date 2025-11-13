let from = document.getElementById('from');
let to = document.getElementById('to');
let input = document.querySelector('input');
let btn = document.querySelector('button');
let result = document.querySelector('.left .result');
let left = document.querySelector('.left');
let heading = document.querySelector('.left h2');

btn.onclick = function(e){
    e.preventDefault();

    let amount = Number(input.value);

if(amount === 0 || amount === ''){
    result.textContent = 'من فضلك ادخل رقم صحيح';
    return;
}
let rates = {
    egp : 1,
    usd : 52,
    eur : 56,
}

let converted = (amount * rates[from.value]) / rates[to.value];
result.textContent = converted.toFixed(2);
result.style.display = 'block';

input.value = 0;

}