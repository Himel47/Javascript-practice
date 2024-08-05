

const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    console.log('Hi');

    const now = new Date();

    //second
    const seconds = (now.getSeconds())%60;
    const secRotation = (seconds*6)+90;
    secHand.style.transform = `rotate(${secRotation}deg)`;

    //minute
    const minutes = (now.getMinutes())%60;
    const minRotation = (minutes*6)+90;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    
    //hour
    const hours = (now.getHours())%12;
    const hourRotation = (hours*30)+90;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(setDate, 1000);

