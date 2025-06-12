const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;
    if (val === 'C') {
      current = '';
      display.value = '';
    } else if (val === '=') {
      try {
        current = eval(current).toString();
        display.value = current;
      } catch {
        display.value = 'Error';
        current = '';
      }
    } else {
      current += val;
      display.value = current;
    }
  });
});
