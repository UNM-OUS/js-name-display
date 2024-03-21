const scanner_form = document.getElementById('scanner-form');
const scanner_input = document.getElementById('scanner-input');

scanner_form.addEventListener('submit', (e) => {
  if (scanner_input.value) {
    queue.push(scanner_input.value);
    scanner_input.value = '';
    scanner_input.focus();
    e.preventDefault();
    return false;
  }
});