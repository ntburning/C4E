import '../styles/index.scss';

let counter = 0;

document.getElementById('btn_plus').addEventListener('click', () => {
  counter++;
  document.getElementById('counter').textContent = counter.toString();
});

document.getElementById('btn_minus').addEventListener('click', () => {
  counter--;
  document.getElementById('counter').textContent = counter.toString();
});
