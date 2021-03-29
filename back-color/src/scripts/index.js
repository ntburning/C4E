import '../styles/index.scss';
import startPage from '../tags/start.tag';
import playPage from '../tags/play.tag';
import countdownPage from '../tags/countdown.tag';

let tutPlayed = false;

const colorNames = [
  'green',
  'yellow',
  'blue',
  'red',
];

const colorValues = {
  red: 'hsl(0, 50%, 60%)',
  green: 'hsl(93, 50%, 60%)',
  blue: 'hsl(212, 50%, 60%)',
  yellow: 'hsl(59, 50%, 60%)',
};

function render(html) {
  document.getElementById("main_content").innerHTML = html;
}

function playCorrectSound() {
  new Audio('./public/correct.mp3').play();
}

function playIncorrectSound() {
  new Audio('./public/incorrect.mp3').play();
}

function initStartScene() {
  render(startPage);
  document.getElementById('start').addEventListener('click', () => {
    new Audio('public/start.mp3').play();
    if (tutPlayed) {
      initPlayScene();
    } else {
      initTutScene();
    }
  });
}

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function initTutScene() {

  function showMeaningHint() {
    render(playPage);
    const quizText = document.getElementById('quiz_text');
    const quizColor = document.getElementById('quiz_color');
    quizColor.style.opacity = 0;
    quizText.style.opacity = 1;
    quizText.textContent = 'yellow';
    quizText.style.color = colorValues.blue;
    document.querySelector('.choice.bg-yellow .content').innerHTML = '<span color="yellow" class="hint">Meaning</span>';
    let hintInterval = setInterval(() => {
      const rightChoice = document.querySelector('.choice.bg-yellow');
      if (rightChoice.style.opacity == 1) {
        rightChoice.style.opacity = 0.5;
      } else {
        rightChoice.style.opacity = 1;
      }
    }, 500);
    const choices = Array.from(document.getElementsByClassName('choice'));
    choices.forEach(choice => {
      choice.addEventListener('click', e => {
        const userChoice = e.target.getAttribute('color');
        if (userChoice != 'yellow') {
          playIncorrectSound();
        } else {
          playCorrectSound();
          clearInterval(hintInterval);
          showColorHint();
        }
      });
    });
  }

  function showColorHint() {
    render(playPage);
    const quizText = document.getElementById('quiz_text');
    const quizColor = document.getElementById('quiz_color');
    quizColor.style.opacity = 1;
    quizText.style.opacity = 0;
    quizColor.textContent = 'yellow';
    quizColor.style.color = colorValues.blue;
    document.querySelector('.choice.bg-blue .content').innerHTML = '<span color="blue" class="hint">Color</span>';
    let hintInterval = setInterval(() => {
      const rightChoice = document.querySelector('.choice.bg-blue');
      if (rightChoice.style.opacity == 1) {
        rightChoice.style.opacity = 0.5;
      } else {
        rightChoice.style.opacity = 1;
      }
    }, 500);
    const choices = Array.from(document.getElementsByClassName('choice'));
    choices.forEach(choice => {
      choice.addEventListener('click', e => {
        const userChoice = e.target.getAttribute('color');
        if (userChoice != 'blue') {
          playIncorrectSound();
        } else {
          clearInterval(hintInterval);
          playCorrectSound();
          initCountDownScene();
        }
      });
    });
  }
  
  showMeaningHint();

}

function initCountDownScene() {
  render(countdownPage);
  let timeLeft = 3;
  let countInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      timeLeft = 0;
      clearInterval(countInterval);
      initPlayScene();
    } else {
      document.getElementById('time_left').textContent = timeLeft.toString();
    }
  }, 1000);
}

function initPlayScene() {
  render(playPage);

  let quiz = null;

  function generateQuiz() {
    const rightAnswer = choice(colorNames);
    const type = Math.random() > 0.5? 'color' : 'text';
    let text = '';
    let color = '';
    if (type == 'text') {
      text = rightAnswer;
      color = colorValues[choice(colorNames)];
    } else {
      text = choice(colorNames);
      color = colorValues[rightAnswer];
    }
    quiz = {
      rightAnswer,
      color,
      text,
      type,
    };
  }

  function setupEvents() {
    const choices = Array.from(document.getElementsByClassName('choice'));
    choices.forEach(choice => {
      choice.addEventListener('click', e => {
        onUserChoice(e.target.getAttribute('color'));
      });
    });
  }

  function showQuiz() {
    const quizText = document.getElementById('quiz_text');
    const quizColor = document.getElementById('quiz_color');
    let quizView;
    if (quiz.type == 'text') {
      quizText.style.opacity = 1;
      quizColor.style.opacity = 0;
      quizView = quizText;
    } else {
      quizText.style.opacity = 0;
      quizColor.style.opacity = 1;
      quizView = quizColor;
    }
    quizView.textContent = quiz.text;
    quizView.style.color = quiz.color;
  }
  
  function onUserChoice(color) {
    if (color == quiz.rightAnswer) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
    generateQuiz();
    showQuiz();
  }

  setupEvents();
  generateQuiz();
  showQuiz();
}

initStartScene();

