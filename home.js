// for transaction history
const transactionData = [];

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

    // for transaction part
    const data ={
        name: 'Add Money', 
        date: new Date().toLocaleDateString()
    }

    transactionData.push(data);
    console.log(transactionData);

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

    // for transaction part
    let data ={
        name: 'Cash Out', 
        date: new Date().toLocaleDateString()
    }

    transactionData.push(data);
    console.log(transactionData);
})

// transaction History dynamic
document.getElementById('transcation-button').addEventListener('click',function(e)
{
    e.preventDefault();
    const transactionContainer = document.getElementById('transactions-container');
    transactionContainer.innerHTML = `
    <div class="flex justify-between items-center">
        <h2 class="font-bold text-lg">Transaction History</h2>
        <p class="text-gray-600">View All</p>
    </div>
`;
 
    for(const tData of transactionData)
    {

        const div = document.createElement('div');
        div.innerHTML =
         `
        <div class="mt-5 rounded-lg p-3 bg-white">
        <div class="flex items-center justify-between">
        <div class="flex gap-5 items-center">
        <img class="p-3 rounded-full bg-[#f4f5f7]" src="image/wallet1.png" alt="">
        <div>
        <h2 class="font-semibold text-lg">${tData.name}</h2>
        <p class="text-gray-500">${tData.date}</p>
        </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </div>
        `

        transactionContainer.appendChild(div);
    }
})

// toggling

// cashout-pointer-button
document.getElementById('cashout-pointer-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'block';
})

// add-money-pointer-button
document.getElementById('add-money-pointer-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'block';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'none';
})

// transfer-money-button
document.getElementById('transfer-money-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'block';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'none';
})

// get-bonus-button
document.getElementById('get-bonus-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'block';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'none';
})

// pay-bill-button
document.getElementById('pay-bill-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'block';
    document.getElementById('transactions-container').style.display = 'none';
    document.getElementById('cash-out-container').style.display = 'none';
})

// transcation-button
document.getElementById('transcation-button').addEventListener('click', function()
{
    document.getElementById('add-money-container').style.display = 'none';
    document.getElementById('latest-payment').style.display = 'none';
    document.getElementById('transfer-money-container').style.display = 'none';
    document.getElementById('get-bonus-container').style.display = 'none';
    document.getElementById('pay-bill-container').style.display = 'none';
    document.getElementById('transactions-container').style.display = 'block';
    document.getElementById('cash-out-container').style.display = 'none';
})


