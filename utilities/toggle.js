document.getElementById('cash-out').style.display = 'none';


document.getElementById('add-money-card').addEventListener('click', () => {
    handleToggle('add-money', 'block');
    handleToggle('cash-out', 'none');
    handleToggle('transaction-history', 'none')
})
document.getElementById('cash-out-card').addEventListener('click', () => {
    handleToggle('cash-out', 'block');
    handleToggle('add-money', 'none');
    handleToggle('transaction-history', 'none')
})

