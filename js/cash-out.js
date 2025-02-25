document.getElementById('withdraw-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const pin =  document.getElementById('cashout-pin').value;
    const convertedPin  = parseInt(pin);
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);
    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);

    if(convertedPin === 1234){
        let sum = convertedBalance - convertedAmount
        document.getElementById('balance').innerText = sum
    }
    else{
        alert('Enter valid PIN');
    }
})