// Hide the loader after page load
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Ripple effect
document.querySelector('.ripple-btn').addEventListener('click', function (e) {
  const circle = document.createElement('span');
  circle.classList.add('ripple');
  circle.style.left = e.offsetX + 'px';
  circle.style.top = e.offsetY + 'px';
  this.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
});

// Scroll popup
let shown = false;
window.onscroll = () => {
  if (!shown && window.scrollY > 100) {
    document.getElementById("popup").style.display = "block";
    shown = true;
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 3000);
  }
};

// Draw a simple bar graph
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");
const data = [80, 50, 70, 40];
ctx.fillStyle = "purple";
data.forEach((value, i) => {
  ctx.fillRect(i * 60 + 10, 150 - value, 40, value);
});