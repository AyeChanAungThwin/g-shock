// Created by - Aye Chan Aung Thwin

function getCurrentDayOfTheWeek(takesText) {
    const days = ["SU", "MN", "TU", "WD", "TH", "FR", "ST"];

    const date = new Date();
    return (takesText ? days[date.getDay()] : date.getDay()+1);
}

function getCurrentMonthOfTheYear(takesText) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date();
    return (takesText ? months[date.getMonth()] : date.getMonth()+1);
}

function getNthDayOfTheMonth() {
    const date = new Date();
    return date.getDate();
}

function getCurrentHours(takes24Hours) {
    const date = new Date();
    let hour = date.getHours();
    if (takes24Hours) {
        return hour;
    }
    else {
        if (hour>12) hour-=12;
        return hour;
    }
}

function getCurrentMinutes() {
    const date = new Date();
    let min = date.getMinutes();
    return min;
}

function getCurrentSeconds() {
    const date = new Date();
    let sec = date.getSeconds();
    return sec;
}

function isPM() {
    return getCurrentHours(true)>=12;
}

function getAmPm() {
    return (!isPM() ? "A" : "P");
}

let blinkColon = false;

function setDigitalClock() {
    let digitHrMin = document.querySelector('[data-digit-hr-min]');
    let digitSec = document.querySelector('[data-digit-sec]');
    let digitDate = document.querySelector('[data-digit-date]');

    let daysOfTheWeek = document.querySelector('[data-days-of-the-week]');
    let showMeridiem = document.querySelector('[data-show-meridiem]');

    let hr=getCurrentHours(); //set true to get 24 hours
    let min=getCurrentMinutes();
    let sec=getCurrentSeconds();
    let date=getNthDayOfTheMonth();
    let month=getCurrentMonthOfTheYear(); //set true to get as String

    blinkColon = !blinkColon;
    let colonState = (blinkColon ? ' ' : ':' );

    hr = (hr.toString().length==1? ('!'+hr) : hr); //Exclamation mark will left a blank for "DSEG7ModernMini-Bold.ttf" font!
    min = (min.toString().length==1? ('0'+min) : min);
    sec = (sec.toString().length==1? ('!'+sec): sec);
    
    date = (date.toString().length==1? '0'+date: date);
    month = (month.toString().length==1? '0'+month: month);

    digitHrMin.innerHTML = `${hr}${colonState}${min}`;
    digitSec.innerHTML = sec;
    digitDate.innerHTML = `${month}-${date}`;

    daysOfTheWeek.innerHTML = getCurrentDayOfTheWeek(true);
    showMeridiem.innerHTML = `${getAmPm()}`;
}

setInterval(setDigitalClock, 1000);
setDigitalClock();