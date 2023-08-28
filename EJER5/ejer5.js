const counter = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  counter.textContent = count;
  counter.classList.remove('move-animation');
  void counter.offsetWidth; // Triggers reflow to restart animation
  counter.classList.add('move-animation');
});

