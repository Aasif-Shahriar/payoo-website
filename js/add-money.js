const addMoney = document.getElementById('add-money-btn')

addMoney.addEventListener('click', (event) => {
    event.preventDefault();
    const amountEl = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amountEl);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);

    if (amountEl && pin) {
       if(convertedPin === 1234){
        let sum = convertedAmount + convertedBalance;
        document.getElementById('balance').innerText = sum;
       }
       else{
        alert('Enter valid pin')
       }
    }
    else{
        alert('Enter amount')
    }
})