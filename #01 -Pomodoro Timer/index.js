// Set the timer
let timer = null;
let minutes = 25;
let seconds = 0;

// Get the elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Add click event listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Define the functions for the buttons
function startTimer() {
  if (timer === null) {
    timer = setInterval(countDown, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  updateTimer();
}

// Define the countDown function
function countDown() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      timer = null;
      // Play a sound to indicate the end of the session
      const audio = new Audio('https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3');
      audio.play();
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateTimer();
}

// Define the updateTimer function
function updateTimer() {
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

// Define the formatTime function
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
