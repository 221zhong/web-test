const canvas = document.querySelector("#sky");
const ctx = canvas.getContext("2d");
const noButton = document.querySelector("#noButton");
const yesButton = document.querySelector("#yesButton");
const card = document.querySelector("#questionCard");
const surprise = document.querySelector("#surprise");

let particles = [];
let width = 0;
let height = 0;
let lastBurst = 0;

function resizeCanvas() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  width = innerWidth;
  height = innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function burst(x = Math.random() * width, y = Math.random() * height * 0.7, amount = 42) {
  const hue = Math.random() * 360;
  for (let i = 0; i < amount; i += 1) {
    const angle = (Math.PI * 2 * i) / amount + Math.random() * 0.2;
    const speed = 1.2 + Math.random() * 4.2;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.009 + Math.random() * 0.012,
      hue: hue + Math.random() * 46 - 23,
      size: 1.2 + Math.random() * 2.6
    });
  }
}

function animate(time) {
  ctx.fillStyle = "rgba(5, 2, 18, .16)";
  ctx.fillRect(0, 0, width, height);

  if (time - lastBurst > 850) {
    burst();
    lastBurst = time;
  }

  particles = particles.filter((particle) => particle.life > 0);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.025;
    p.vx *= 0.994;
    p.life -= p.decay;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life})`;
    ctx.shadowBlur = 16;
    ctx.shadowColor = `hsl(${p.hue}, 100%, 60%)`;
    ctx.fill();
  }
  ctx.shadowBlur = 0;
  requestAnimationFrame(animate);
}

function moveNoButton() {
  const margin = 18;
  const rect = noButton.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;
  const maxX = Math.max(margin, viewportWidth - rect.width - margin);
  const maxY = Math.max(margin, viewportHeight - rect.height - margin);
  noButton.classList.add("running");
  noButton.style.left = `${Math.min(maxX, margin + Math.random() * Math.max(0, maxX - margin))}px`;
  noButton.style.top = `${Math.min(maxY, margin + Math.random() * Math.max(0, maxY - margin))}px`;
}

function keepNoButtonOnScreen() {
  if (!noButton.classList.contains("running")) return;
  const margin = 18;
  const rect = noButton.getBoundingClientRect();
  const maxX = Math.max(margin, document.documentElement.clientWidth - rect.width - margin);
  const maxY = Math.max(margin, document.documentElement.clientHeight - rect.height - margin);
  noButton.style.left = `${Math.min(maxX, Math.max(margin, rect.left))}px`;
  noButton.style.top = `${Math.min(maxY, Math.max(margin, rect.top))}px`;
}

noButton.addEventListener("pointerenter", moveNoButton);
noButton.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  moveNoButton();
});
noButton.addEventListener("focus", moveNoButton);

yesButton.addEventListener("click", () => {
  card.classList.add("hide");
  noButton.hidden = true;
  surprise.classList.add("show");
  surprise.setAttribute("aria-hidden", "false");
  for (let i = 0; i < 9; i += 1) {
    setTimeout(() => burst(width * (0.15 + Math.random() * 0.7), height * (0.15 + Math.random() * 0.55), 64), i * 160);
  }
});

addEventListener("resize", () => {
  resizeCanvas();
  keepNoButtonOnScreen();
});
resizeCanvas();
requestAnimationFrame(animate);
