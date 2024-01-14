let count = 0;
const countElement = document.getElementById('count');

function updateCount() {
  countElement.textContent = count;
}

function increase() {
  count++;
  updateCount();
}

function decrease() {
  count = Math.max(0, count - 1); 
  updateCount();
}

function reset() {
  count = 0;
  updateCount();
}
