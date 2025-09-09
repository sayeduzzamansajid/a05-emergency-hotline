// Heart button click functionality and event Listner 
const heartButton = document.getElementsByClassName('icon-heart');
for(const icon of heartButton){
    icon.addEventListener('click',function(event){
        const availableHeart = parseInt(document.getElementById('heart').innerText);
        const newHeart = availableHeart + 1;
        document.getElementById('heart').innerText = newHeart;
    })
}