const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);
let timerId = null;

function onBtnStart() {
    timerId = setInterval(changeBodyColor, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
    // console.log(timerId);
}

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


function onBtnStop() {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
    // console.log(timerId);
}