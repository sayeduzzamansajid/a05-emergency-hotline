let historyData =[];

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
        const callingTo = card.querySelector('p.font-semibold').innerText;
        const number = card.querySelector('h1').innerText;
        const time = new Date().toLocaleTimeString();
        const data ={
            name: callingTo,
            number: number,
            time:time
        }
        historyData.push(data);
        if (availableCoin >= 20) {
            alert(`Calling to ${callingTo} ${number} ...`);
            const newAvailableCoin = availableCoin - 20;
            document.getElementById('call-coin').innerText = newAvailableCoin;
            
            //history set 
            const historyContainer = document.getElementById('history-container');
            //create new element
            const history = document.createElement('div');
            history.innerHTML = `
            <div class="history">
                    <div class=>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <div>
                        ${data.time}
                    </div>
                </div>`;
                historyContainer.appendChild(history);
        }
        else{
            alert("insufficient coin!! Minimum 20 coin needed for calling any services");
            return;
        }

        


    })
}

// copy button functionality and event 
// const copyButton = document.getElementsByClassName('btn-copy');
// for(const btn of copyButton){
//     btn.addEventListener('click', function(event){
//         let initialCopy = parseInt(document.getElementById('copy-count').innerText);
//         const card = event.target.closest('.card');
//         const numberPtag = card.querySelector('h1').innerText;
//         alert(`Copied The Number ${numberPtag}`);
//         initialCopy = initialCopy + 1
//         document.getElementById('copy-count').innerText = initialCopy;
//     });}

const copyButton = document.getElementsByClassName('btn-copy');

for (const btn of copyButton) {
    btn.addEventListener('click', async function(event) {
        const card = event.target.closest('.card');
        const numberPtag = card.querySelector('h1').innerText;

        try {
            await navigator.clipboard.writeText(numberPtag);
            alert(`Copied The Number ${numberPtag}`);
        } catch (err) {
            console.error('Copy failed', err);
        }

        let initialCopy = parseInt(document.getElementById('copy-count').innerText);
        document.getElementById('copy-count').innerText = initialCopy + 1;
    });
}



// clear button functionality and event 

document.getElementById('btn-clear').addEventListener('click',function(event){
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';
    
})