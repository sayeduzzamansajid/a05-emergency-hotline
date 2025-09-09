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
        if (availableCoin >= 20) {
            alert(`Calling to ${callingTo.innerText} ${number.innerText} ...`);
            const newAvailableCoin = availableCoin - 20;
            document.getElementById('call-coin').innerText = newAvailableCoin;
        }
        else{
            alert("insufficient coin!! Minimum 20 coin needed for calling any services");
        }


    })
}

// copy button 
const copyButton = document.getElementsByClassName('btn-copy');
for(const btn of copyButton){
    btn.addEventListener('click', function(event){
        let initialCopy = parseInt(document.getElementById('copy-count').innerText);
        const card = event.target.closest('.card');
        const numberPtag = card.querySelector('h1').innerText;
        console.log(numberPtag)
        alert(`Copied The Number ${numberPtag}`);
        initialCopy = initialCopy + 1
        document.getElementById('copy-count').innerText = initialCopy;
    })
}