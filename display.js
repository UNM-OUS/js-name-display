const disp = document.getElementById('name-list');
const queue = [];
const displayed = [];

setInterval(popQueue, 1000);
function popQueue() {
  const name = queue.shift();
  if (name === undefined) return;
  const el = document.createElement('div');
  el.classList.add('name');
  el.innerHTML = name;
  el.style.top = '-10em';
  el.style.opacity = 0;
  disp.append(el);
  // run animation
  setTimeout(() => {
    displayed.unshift(el);
    var totalHeight = 0;
    displayed.forEach((el) => {
      // delete if finished
      if (totalHeight > disp.offsetHeight * 1.5) {
        displayed.pop();
        disp.removeChild(el);
      }
      // otherwise animate
      el.style.opacity = 1;
      el.style.top = totalHeight + 'px';
      totalHeight += el.offsetHeight;
    });
  }, 1);
}