document.getElementById('add-money-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const accNum = document.getElementById('accNum').value;
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount)
    const pinNum = document.getElementById('pin').value;
    const convertedPin = parseInt(pinNum);
    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);


    if(accNum.length === 11){
       if(convertedPin === 1234){
            let sum = convertedAmount + convertedBalance;
            document.getElementById('balance').innerText = sum;



            const p = document.createElement('p');
            p.innerText = `
            added ${amount} from ${accNum}
            `

            console.log(p)
       }
       else{
        alert('Enter Valid PIN')
       }
    }
    else{
        alert('Enter Valid Account Number')
    }

})