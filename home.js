document.getElementById('home-page-button').addEventListener('click', function(e)
{
    e.preventDefault();
    
    const selectBank = document.getElementById("select-bank").value;
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const amountToAdd = parseInt(document.getElementById('amount-to-add').value);
    const pinNumber = document.getElementById('pin-number').value;

    let availableBalance = parseInt(document.getElementById('available-balance').innerText);

    // console.log(availableBalance);

    availableBalance = availableBalance + amountToAdd;


    document.getElementById('available-balance').innerText = availableBalance;

    // console.log(selectBank, bankAccountNumber, amountToAdd, pinNumber);
})