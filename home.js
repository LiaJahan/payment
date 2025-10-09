// common function to access total amount
function functionAvailableBalance(id)
{
    let availableBalance = parseInt(document.getElementById(id).innerText);
    return availableBalance;
}


// code for Add Money

// const validPinNumber = 1234;
document.getElementById('home-page-button').addEventListener('click', function(e)
{
    e.preventDefault();
    
    const selectBank = document.getElementById("select-bank").value;
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const amountToAdd = parseInt(document.getElementById('amount-to-add').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);

    let availableBalance = functionAvailableBalance('available-balance');

    // console.log(availableBalance);

    if(selectBank === "")
    {
        alert('please select a bank');
        return;
    }

    if(bankAccountNumber.length < 11)
    {
        alert('please provide valid Bank Account Number');
        return;
    }

    if(pinNumber !== 1234)
    {
        alert('please provide valid Pin Number');
        return;
    }

    availableBalance = availableBalance + amountToAdd;


    document.getElementById('available-balance').innerText = availableBalance;

    // console.log(selectBank, bankAccountNumber, amountToAdd, pinNumber);
})

// Code for withdraw Money
document.getElementById('withdrawMoneyButton').addEventListener('click', function(e)
{
    e.preventDefault();
    const withdrawAgentNumber = document.getElementById('withdraw-agent-number').value;
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const withdrawPinNumber = parseInt(document.getElementById('withdraw-pin-number').value);

    // console.log(withdrawAgentNumber, withdrawAmount, withdrawPinNumber);

    if(withdrawAgentNumber.length<11)
    {
        alert('Please check all the information again');
        return;
    }
    if(withdrawPinNumber !== 1234)
    {
        alert('Please check all the information again');
        return;
    }

    let availableBalance2 = functionAvailableBalance('available-balance');

    
    availableBalance2 = availableBalance2 - withdrawAmount;

    console.log(availableBalance2);
    document.getElementById('available-balance').innerText = availableBalance2; 
})

// toggling

// cashout-pointer-button
document.getElementById('cashout-pointer-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'block';
})

// add-money-pointer-button
document.getElementById('add-money-pointer-button').addEventListener('click', function()
{
    document.getElementById('cash-out-container').style.display = 'none';
    document.getElementById('add-money-container').style.display = 'block';
})

