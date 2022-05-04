const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  coordinate.style.top = `${y}px`;
  coordinate.style.left = `${x}px`;
  coordinate.innerHTML = `${x}px, ${y}px`;
});
