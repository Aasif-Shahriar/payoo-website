document.getElementById('withdraw-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const cashoutAcc = document.getElementById('cashout-acc').value;
    const amount = getInputValueById('cashout-amount');
    const pin = getInputValueById('cashout-pin');
    const balance = getInnerTextById('balance');

    if(cashoutAcc.length === 11){
        if(pin === 1234){
            const sum = balance - amount;
            setInnerText("balance", sum)
        }else{
            alert('Invalid PIN')
        }
    }else{
        alert('Enter a valid account number')
    }
})