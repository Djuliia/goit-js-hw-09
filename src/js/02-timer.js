import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';


const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector("#datetime-picker");
const timerFace = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
};

let countdownInterval = null;
let targetDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        targetDate = selectedDates[0];

        if (targetDate < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtn.disabled = false;
        }
    },
  };

const fp = flatpickr(inputEl, options);

startBtn.addEventListener('click', startCountdown);

function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const currentDate = new Date();
    const deltaTime = targetDate - currentDate;
    if (deltaTime <= 0) {
        clearInterval(countdownInterval);
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    renderCountdown(days, hours, minutes, seconds);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function renderCountdown(days, hours, minutes, seconds) {
    timerFace.days.textContent = addLeadingZero(days);
    timerFace.hours.textContent = addLeadingZero(hours);
    timerFace.minutes.textContent = addLeadingZero(minutes);
    timerFace.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


