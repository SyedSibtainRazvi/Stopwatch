let minutes = 00;
let seconds = 00;
let tens = 00;

let getMinutes = document.querySelector('.minutes');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

let btnStart = document.querySelector('.btn-start');
let btnPause = document.querySelector('.btn-pause');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnPause.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    getSeconds.innerHTML = seconds;
    getMinutes.innerHTML = minutes;
    getTens.innerHTML = tens;
})

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (minutes > 9) {
        getSeconds.innerHTML = minutes;
    }
}