const buttons = document.getElementsByClassName('timer__button');
const timeLeft = document.getElementsByClassName('display__time-left')[0];
const endTime = document.getElementsByClassName('display__end-time')[0];
const customForm = document.getElementById('custom');

let count = 0;
let interval;

for (const button of buttons) {
    button.addEventListener('click', (event) => {
        const { time } = event.target.dataset;
        startTimer(time);
    });
}

customForm.addEventListener('submit', (event) => {
    const time = event.target[0].value * 60;
    startTimer(time);
    event.preventDefault();
});

function startTimer(time) {
    clearInterval(interval);
    count = time;
    printTime();
    const end = new Date(new Date().getTime() + time * 1000);
    endTime.innerHTML = end.getHours() + ':' + end.getMinutes();

    interval = setInterval(() => {
        count--;
        printTime();
        if (count === 0) {
            timeLeft.innerHTML = '';
            endTime.innerHTML = '';
            clearInterval(interval);
        }
    }, 1000);
}

function printTime() {
    const hours = Math.floor(count / 3600);
    const minutes = Math.floor((count - hours * 3600) / 60);
    const seconds = count % 60;
    if (hours > 0) {
        timeLeft.innerHTML = hours + ':' + minutes + ':' + seconds;
    } else if (minutes > 0) {
        timeLeft.innerHTML = minutes + ':' + seconds;
    } else {
        timeLeft.innerHTML = seconds;
    }
}