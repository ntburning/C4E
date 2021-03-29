import '../styles/index.scss';

let h;
let s;
let l;
let correctSoundUrl = './public/correct.mp3';
let incorrectSoundUrl = './public/incorrect.mp3';

let colorChoices = Array.from(document.getElementsByClassName('color-choice'));
let result = document.getElementById('result');

function shift(c, min, max) {
  let error = Math.random() * max - min;
  let sign = (c - min) < (max - min) / 2 ? 1 : -1;
  let shiftedColor = c + sign * error;
  if (shiftedColor < min) return min;
  if (shiftedColor > max) return max;
  return shiftedColor;
}

function setupEvents() {
  colorChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
      if (e.target.getAttribute('correct') === 'true') {
        result.textContent = 'Yay';
        result.style.color = 'green';
        new Audio(correctSoundUrl).play();
      } else {
        result.textContent = 'Nah';
        result.style.color = 'red';
        new Audio(incorrectSoundUrl).play();
      }
      generateColor();
    });
  });
}

function generateColor () {
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 100);
  l = Math.floor(Math.random() * 100);

  const rightIndex = Math.floor(Math.random() * colorChoices.length);
  console.log(rightIndex);
  
  for(let i = 0; i < colorChoices.length; i++) {
    if(i == rightIndex) {
      colorChoices[i].style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
      colorChoices[i].setAttribute('correct', true);
    } else {
      let wrongH = shift(h, 72, 360);
      let wrongS = shift(s, 0, 100);
      let wrongL = shift(l, 0, 100);
      colorChoices[i].style.backgroundColor = `hsl(${wrongH}, ${wrongS}%, ${wrongL}%)`;
      colorChoices[i].setAttribute('correct', false);
    }
  }
  document.getElementById('quiz').textContent = `hsl(${h}, ${s}%, ${l}%)`;
  setTimeout(() => {
    result.textContent = 'Pick one...';
    result.style.color = '#000000';
  }, 500);
}

setupEvents();
generateColor();