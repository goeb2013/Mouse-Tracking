const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

window.addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coordinate.style.transform = `translate(${x - 52}px, ${y + 35}px)`;
    coordinate.innerHTML = `${x}px, ${y}px`;
  });
});
