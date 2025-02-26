document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const amount = getInputValueById('amount')
    const pin = getInputValueById('pin')
    const accNum = document.getElementById('accNum').value;
    const balance = getInnerTextById('balance')

    if(accNum.length === 11){
        if(pin === 1234){
            const sum = amount + balance;
            setInnerText('balance', sum)
        }
        else{
            alert('Invalid PIN Number')
        }
    }
    else{
        alert('Enter Valid Number')
    }
})