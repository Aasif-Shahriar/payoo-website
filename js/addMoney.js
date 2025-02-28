document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const amount = getInputValueById('amount')
    const pin = getInputValueById('pin')
    const accNum = document.getElementById('accNum').value;
    const balance = getInnerTextById('balance');
    const bankList = document.getElementById('bank-list').value;

    console.log(bankList)


    //negative number atkanor upay
    if(amount < 0){
        alert('Number is not positive')
        return;
    }

    if(accNum.length === 11){
        if(pin === 1234){
            const sum = amount + balance;
            setInnerText('balance', sum);

            const transactionContainer = document.getElementById('transaction-container');
            
            const div = document.createElement('div');
            div.classList.add('bg-green-300');
            div.classList.add('p-4');
            div.classList.add('mb-2')
            div.innerHTML = `
            <h1>Added money from ${bankList} </h1>
            <h3>$${amount}</h3>
            <p>Account number: ${accNum}
            `;

            transactionContainer.appendChild(div);
        }
        else{
            alert('Invalid PIN Number')
        }
    }
    else{
        alert('Enter Valid Number')
    }
})