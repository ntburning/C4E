import '../styles/index.scss';

let timeLeft = 0;
let timerInterval;

document.getElementById('btn_start').addEventListener('click', () => {
  console.log('click');
  const enteredTime = Number(document.getElementById('input_seconds').value);
  timeLeft = enteredTime;
  document.getElementById('time_left').textContent = timeLeft.toString();
  document.getElementById('btn_start').setAttribute('disabled', true);
  document.getElementById('btn_stop').removeAttribute('disabled');
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timeLeft = 0;
      timerInterval = null;
      document.getElementById('time_left').textContent = "Time's up";
      document.getElementById('btn_start').removeAttribute('disabled');
      document.getElementById('btn_stop').setAttribute('disabled', true);
    } else {
      document.getElementById('time_left').textContent = timeLeft.toString();
    }
  }, 1000);
});

document.getElementById('btn_stop').addEventListener('click', () => {
  if (timerInterval != null) {
    clearInterval(timerInterval);
  }
  document.getElementById('btn_start').removeAttribute('disabled');
  document.getElementById('btn_stop').setAttribute('disabled', true);
  document.getElementById('time_left').textContent = "Stopped";
});
