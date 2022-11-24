const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#btn');
const message = document.querySelector('#error');
const noOfNotes = document.querySelectorAll('.no-of-notes')

const notes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener('click',function result(){
    hideMessage();
    if(billAmount.value > 0){
        if(parseInt(billAmount.value) <= parseInt(cashGiven.value)){
            const amountLeft = cashGiven.value - billAmount.value;
            calculateNotes(amountLeft);
        }
        else{
            showMessage("Do you want to wash plates?");
        }
    }
    else{
        showMessage("The bill amount should be greater than 0"); 
    }
});

function calculateNotes(amountLeft){
    for(let i = 0;i<notes.length;i++){
        const numberofNotes = Math.trunc(amountLeft/notes[i]);
        amountLeft %= notes[i];
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
