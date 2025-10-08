document.getElementById('index-button').addEventListener('click', function(e)
{
    e.preventDefault();
    
    // take value from the users
    const inputMobile = document.getElementById('number-input').value;
    const mobileNumber = parseInt(inputMobile);
    

    const inputPin = document.getElementById('pin-input').value;
    const pinNumber = parseInt(inputPin);
    
    // fix value for validation check
    
    const stringNumber = '0731565644';
    const fixMobileNumber = parseInt(stringNumber);
    const fixPin = 1234;
    
    // login build
    if(mobileNumber === fixMobileNumber && pinNumber === fixPin )
    {
        // window.location.href(./home.html);
        alert('Good Job')
    }
    else
    {
        alert('wrong input!!')
    }
})