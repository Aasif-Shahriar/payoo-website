function getInputValueById(id) {
  const inputVal = document.getElementById(id).value;
  const convertedInputVal = parseFloat(inputVal);
  return convertedInputVal;
}
function getInnerTextById(id) {
  const textVal = document.getElementById(id).innerText;
  const convertedVal = parseFloat(textVal);
  return convertedVal;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}


function handleToggle(id, status){
  document.getElementById(id).style.display = status;
}