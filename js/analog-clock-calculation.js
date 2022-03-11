// Created by - Aye Chan Aung Thwin

function setAnalogClock() {
    let hrHand = document.querySelector('[data-hr-hand]');
    let minHand = document.querySelector('[data-min-hand]');

    const date = new Date();
    const  secRatio = date.getSeconds()/60;
    const  minRatio = (secRatio+date.getMinutes())/60;
    const  hrRatio = (minRatio+date.getHours())/12;

    hrHand.style.setProperty('--hr-hand-rotation', hrRatio * 360);
    minHand.style.setProperty('--min-hand-rotation', minRatio * 360);
}

setInterval(setAnalogClock, 1000);
setAnalogClock();