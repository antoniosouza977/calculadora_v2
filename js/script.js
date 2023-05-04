const buttons = document.querySelectorAll('.key');
const especial_keys = Array.from(document.querySelectorAll('.especial')).map((element) => element.value);
const visor = document.getElementById('visor-text');
let answer = '';
let string_Calc = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      try {
        answer = eval(string_Calc).toFixed(2);
        answer = answer.toString();
        visor.textContent = answer;
        string_Calc = answer;
        answer = '';
      } catch (error) {
        visor.textContent = 'Erro na fórmula!';
        setTimeout(() => {
          visor.textContent = string_Calc;
        }, 1000);
      }
    } else {
      if (!especial_keys.includes(button.value)) {
        if (window.innerWidth <= 600) {
          if (string_Calc.length <= 22) {
            string_Calc += `${button.value}`;
            visor.textContent = string_Calc;
          } else {
            visor.textContent = 'Limite atingido!';
            setTimeout(() => {
              visor.textContent = string_Calc;
            }, 500);
          }
        } else if (string_Calc.length < 39) {
          string_Calc += `${button.value}`;
          visor.textContent = string_Calc;
        } else {
          visor.textContent = 'Limite atingido!';
          setTimeout(() => {
            visor.textContent = string_Calc;
          }, 500);
        }
      } else if (button.value === '⌫') {
        if (visor.textContent === '0' || string_Calc.length === 1) {
          string_Calc = '';
          visor.textContent = '0';
        } else {
          string_Calc = string_Calc.slice(0, string_Calc.length - 1);
          visor.textContent = string_Calc;
        }
      } else if (button.value === 'AC') {
        visor.textContent = '0';
        string_Calc = '';
        answer = '';
      } else if (button.value === 'x') {
        string_Calc += `*`;
        visor.textContent = string_Calc;
      } else if (button.value === '÷') {
        string_Calc += `/`;
        visor.textContent = string_Calc;
      }
    }
  });
});
