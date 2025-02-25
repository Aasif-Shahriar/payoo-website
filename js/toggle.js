document.getElementById('cash-out').style.display = 'none';

// logic for add money card. This function will hide cash out section
document.getElementById('add-money-card').addEventListener('click', () => {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
})

// logic for cash out card. This function will hide add money section
document.getElementById('cash-out-card').addEventListener('click', () => {
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('add-money').style.display = 'none';
})