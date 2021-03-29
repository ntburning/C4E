import '../styles/index.scss';

let calcButtons = document.getElementsByClassName('calc-btn');
let expView = document.getElementById('calc_exp');

let expression = '0';

function updateEpxression() {
  expView.textContent = expression;
}

updateEpxression();

Array.from(calcButtons).forEach(btn => {
  btn.addEventListener('click', (e) => {
    const btnContent = e.target.textContent;
    if (btnContent == 'C') {
      expression = '0';
      updateEpxression();
    } else if (btnContent !== '=') {
      if (expression == '0') expression = '';
      expression += btnContent;
      updateEpxression();
    } else {
      const result = eval(expression);
      expression = result;
      updateEpxression();
    }
  });
});