const display_element = document.getElementById('name-list');
const queue = [];
const display_elements = [];
const display_names = [];

setInterval(display_next, 1000);

function queue_name(name) {
  if (queue.includes(name)) return;
  if (display_names.includes(name)) return;
  queue.push(name);
  display_names.unshift(name);
}

function display_next() {
  const name = queue.shift();
  if (name === undefined) return;
  const el = document.createElement('div');
  el.classList.add('name');
  el.innerHTML = name;
  el.style.top = '-10em';
  el.style.opacity = 0;
  display_element.append(el);

  // run animation
  setTimeout(() => {
    display_elements.unshift(el);
    var totalHeight = 0;
    display_elements.forEach((el) => {
      // delete if finished
      if (totalHeight > display_element.offsetHeight * 1.5) {
        display_names.pop();
        display_elements.pop();
        display_element.removeChild(el);
      }
      // otherwise animate
      el.style.opacity = 1;
      el.style.top = totalHeight + 'px';
      totalHeight += el.offsetHeight;
    });
  }, 1);
}