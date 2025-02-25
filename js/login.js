const btnEl = document.getElementById("login-btn");
btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const accNum = document.getElementById('account-number').value;
  const pinNum = document.getElementById('pin').value;
  const convertedPinNum = parseInt(pinNum)
  if(accNum.length === 11){
    if(convertedPinNum === 1234){
       window.location.href = './index2.html'
    }
    else{
        alert('Invalid PIN number');
    }
  }
  else{
    alert('Need a valid number');
  }

  
});
