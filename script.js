// Heart button click functionality and event Listner 
const heartButton = document.getElementsByClassName('icon-heart');
for (const icon of heartButton) {
    icon.addEventListener('click', function (event) {
        const availableHeart = parseInt(document.getElementById('heart').innerText);
        const newHeart = availableHeart + 1;
        document.getElementById('heart').innerText = newHeart;
    })
};

//Calling button 
const callButtons = document.getElementsByClassName('btn-call');
for (const callbutton of callButtons) {
    callbutton.addEventListener('click', function (event) {
        const availableCoin = parseInt(document.getElementById('call-coin').innerText);//getting available coin
        const card = event.target.closest('.card');
        const callingTo = card.querySelector('p.font-semibold');
        const number = card.querySelector('h1');
        alert(`Calling to ${callingTo.innerText} ${number.innerText} ...`)

    })
}