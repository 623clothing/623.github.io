// subtle flickering red glow for chaos
const logo = document.querySelector('.logo');
setInterval(() => {
  logo.style.textShadow = `
    0 0 10px #ff0000,
    0 0 ${Math.random() * 60}px #ff1111,
    0 0 ${Math.random() * 120}px #ff0000
  `;
}, 300);
