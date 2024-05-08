const scanner_form = document.getElementById('scanner-form');
const scanner_input = document.getElementById('scanner-input');

scanner_form.addEventListener('submit', (e) => {
  if (scanner_input.value) {
    // grab name and do housekeeping
    var name = scanner_input.value;
    scanner_input.value = '';
    scanner_input.focus();
    e.preventDefault();
    // process and queue name
    name = decodeURIComponent(name);
    console.log(name);
    name = name.replaceAll('+', ' ');
    name = name.replaceAll(/(<([^>]+)>)/gi, "")
    queue_name(name);
  }
});