// console.log('hi');

// let hand = document.querySelectorAll('.hand');
// console.log(hand);

// function pressKey(e){
    
//     let keyNumber = document.querySelector('span[class="kNumber"]');
//     keyNumber.textContent = e.keyCode;  
// }
// window.addEventListener('keydown',pressKey);

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand'); 
function setDate(){
    const now = new Date(); // Creating a date object which represents current time and date when it's executed
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`

    const hours = now.getHours();
    const hoursDegree = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate,1000);