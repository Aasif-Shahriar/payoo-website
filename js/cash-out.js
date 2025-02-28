document.getElementById('withdraw-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const cashoutAcc = document.getElementById('cashout-acc').value;
    const amount = getInputValueById('cashout-amount');
    const pin = getInputValueById('cashout-pin');
    const balance = getInnerTextById('balance');

     //negative number atkanor upay
     if(amount > balance){
        alert('Insufficient Balance')
        return;
    }

    if(cashoutAcc.length === 11){
        if(pin === 1234){
            const sum = balance - amount;
            setInnerText("balance", sum);

            const transactionContainer = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.classList.add('bg-red-400');
            p.classList.add('px-3');
            p.classList.add('pb-3');
            p.innerText = `
            Cash out $${amount} from ${cashoutAcc};
            `;

            transactionContainer.appendChild(p)
        }else{
            alert('Invalid PIN')
        }
    }else{
        alert('Enter a valid account number')
    }
})