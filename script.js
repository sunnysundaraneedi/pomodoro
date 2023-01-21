const workTitle = document.getElementById("work");
const breakTitle = document.getElementById("break");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

let workDuration = 25;
let breakDuration = 5;

let seconds = "00";

window.onload = () => {
  minutesElem.innerHTML = workDuration;
  secondsElem.innerHTML = seconds;

  workTitle.classList.add("active");
};

const start = () => {
  startButton.style.display = "none";
  resetButton.style.display = "block";

  seconds = 59;
  let workMins = workDuration - 1;
  let breakMins = breakDuration - 1;

  let breakStatus = true;

  const timerFunc = () => {
    minutesElem.innerHTML = workMins;
    secondsElem.innerHTML = seconds;
    seconds--;
    if (seconds === 0) {
      workMins--;
      if (workMins === -1) {
        if (breakStatus) {
          workMins = breakMins;
          breakStatus = false;
          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          workMins = workDuration - 1;
          breakStatus = true;
          workTitle.classList.add("active");
          breakTitle.classList.remove("active");
        }
      }
      seconds = 59;
    }
  };

  setInterval(timerFunc, 10);
};

startButton.addEventListener("click", start);
