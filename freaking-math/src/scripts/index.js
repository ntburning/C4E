import '../styles/index.scss';

let quiz = null;
let scoreEnabled = false;
let timerEnabled = false;
let timeLeft = 0;
let score = 0;
let interval = null;

function generateQuiz() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let error = [1, 0, -1, 0][Math.floor(Math.random() * 4)];
  quiz = {
    x,
    y,
    rightAnswer: error == 0,
    result: x + y + error,
  };
  if (timerEnabled) {
    startTimer();
  }
}

function showQuiz() {
  document.getElementById('quiz').textContent = `${quiz.x} + ${quiz.y} = ${quiz.result}`;
}

function showScore() {
  document.getElementById('score').textContent = score.toString();
}

function setupEvents() {
  Array
    .from(document.getElementsByClassName('btn'))
    .forEach(btn => {
      btn.addEventListener('click', e => {
        onUserChoice(e.target.getAttribute('correct') === 'true');
      });
    });
  
  document.getElementById('settings_score').addEventListener('change', (e) => {
    scoreEnabled = e.target.checked;
  });

  document.getElementById('settings_timer').addEventListener('change', (e) => {
    timerEnabled = e.target.checked;
  });
}

function onUserChoice(choice) {
  if (quiz.rightAnswer === choice) {
    new Audio('./public/correct.mp3').play();
    if (scoreEnabled) {
      score++;
      showScore();
    }
  } else {
    new Audio('./public/incorrect.mp3').play();
    if (scoreEnabled) {
      score = 0;
      showScore();
    }
  }
  clearInterval(interval);
  generateQuiz();
  showQuiz();
}

function startTimer() {
  timeLeft = 200;
  interval = setInterval(() => {
    timeLeft --;
    if (timeLeft < 0) {
      clearInterval(interval);
      new Audio('./public/incorrect.mp3').play();
      timeLeft = 0;
      if (scoreEnabled) {
        score = 0;
        showScore();
      }
    }
    document.getElementById('progress').style.width = `${timeLeft / 200 * 100}%`;
  }, 10);
}

setupEvents();
generateQuiz();
showQuiz();