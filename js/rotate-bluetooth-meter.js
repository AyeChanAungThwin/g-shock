// Created by - Aye Chan Aung Thwin

let angle = 0;

function rotateMeter(className, rotation) {
    let html = document.querySelector(className);
    html.style.setProperty(rotation, angle);
    angle+=2;
    if (angle==360) angle==0;
}

// setInterval(function() {
//     rotateMeter('.bt-meter-container', '--bt-meter-rotation');
// }, 10);

// setInterval(function() {
//     rotateMeter('.bt-arc', '--bt-arc-rotation');
// }, 10);

// rotateMeter('.bt-arc', '--bt-arc-rotation');

// setInterval(function() {
//     rotateMeter('.hr-hand-container', '--hr-hand-rotation');
// }, 10);