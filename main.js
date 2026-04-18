let timer = null;
let Seconds = 0;
let Start = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(sec) {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function updateDisplay() {
    display.textContent = formatTime(totalSeconds);
}

function startTimer() {
    if (!Start) {
        Start = true;
        timer = setInterval(() => {
            totalSeconds++;
            updateDisplay();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopTimer() {
    if (Start) {
        Start = false;
        clearInterval(timer);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
stopBtn.disabled = true;