const canvas = document.querySelector("#stars");
const ctx = canvas.getContext("2d");
const acceptButton = document.querySelector("#acceptButton");
const shyButton = document.querySelector("#shyButton");
const letter = document.querySelector("#letter");
const answer = document.querySelector("#answer");

let width = 0;
let height = 0;
let sparks = [];
let stars = [];

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  stars = Array.from({ length: Math.min(130, Math.floor(width * height / 8500)) }, () => ({
    x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.5 + .25, phase: Math.random() * Math.PI * 2
  }));
  keepShyButtonInside();
}

function burst(x, y, count = 65) {
  const hue = 335 + Math.random() * 35;
  for (let i = 0; i < count; i += 1) {
    const angle = Math.PI * 2 * i / count + Math.random() * .15;
    const speed = 1.3 + Math.random() * 5;
    sparks.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, hue: hue + Math.random() * 20, size: 1 + Math.random() * 2.4 });
  }
}

function draw(time) {
  ctx.clearRect(0, 0, width, height);
  for (const star of stars) {
    const alpha = .25 + (Math.sin(time * .0018 + star.phase) + 1) * .28;
    ctx.beginPath(); ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,225,220,${alpha})`; ctx.fill();
  }
  sparks = sparks.filter(s => s.life > 0);
  for (const s of sparks) {
    s.x += s.vx; s.y += s.vy; s.vy += .025; s.vx *= .994; s.life -= .012;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${s.hue},100%,72%,${s.life})`;
    ctx.shadowBlur = 14; ctx.shadowColor = `hsl(${s.hue},100%,65%)`; ctx.fill();
  }
  ctx.shadowBlur = 0;
  requestAnimationFrame(draw);
}

function moveShyButton(pointerX = -1000, pointerY = -1000) {
  const margin = 18;
  const rect = shyButton.getBoundingClientRect();
  const maxX = Math.max(margin, width - rect.width - margin);
  const maxY = Math.max(margin, height - rect.height - margin);
  let nextX = margin;
  let nextY = margin;

  // 尽量选择一个远离当前指针的位置，避免按钮跑到指针下面。
  for (let i = 0; i < 12; i += 1) {
    nextX = margin + Math.random() * Math.max(0, maxX - margin);
    nextY = margin + Math.random() * Math.max(0, maxY - margin);
    const centerX = nextX + rect.width / 2;
    const centerY = nextY + rect.height / 2;
    if (Math.hypot(centerX - pointerX, centerY - pointerY) > 170) break;
  }

  shyButton.classList.add("running");
  shyButton.style.left = `${Math.min(maxX, Math.max(margin, nextX))}px`;
  shyButton.style.top = `${Math.min(maxY, Math.max(margin, nextY))}px`;
}

function keepShyButtonInside() {
  if (!shyButton.classList.contains("running")) return;
  const margin = 18;
  const rect = shyButton.getBoundingClientRect();
  shyButton.style.left = `${Math.max(margin, Math.min(width - rect.width - margin, rect.left))}px`;
  shyButton.style.top = `${Math.max(margin, Math.min(height - rect.height - margin, rect.top))}px`;
}

document.addEventListener("pointermove", event => {
  if (shyButton.hidden) return;
  const rect = shyButton.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  if (Math.hypot(event.clientX - centerX, event.clientY - centerY) < 105) {
    moveShyButton(event.clientX, event.clientY);
  }
});

shyButton.addEventListener("pointerenter", event => moveShyButton(event.clientX, event.clientY));
shyButton.addEventListener("pointerdown", event => { event.preventDefault(); moveShyButton(event.clientX, event.clientY); });
shyButton.addEventListener("click", event => { event.preventDefault(); moveShyButton(); });
shyButton.addEventListener("focus", () => { shyButton.blur(); moveShyButton(); });

acceptButton.addEventListener("click", () => {
  letter.classList.add("hide");
  shyButton.hidden = true;
  answer.classList.add("show");
  answer.setAttribute("aria-hidden", "false");
  for (let i = 0; i < 10; i += 1) {
    setTimeout(() => burst(width * (.12 + Math.random() * .76), height * (.12 + Math.random() * .66)), i * 170);
  }
});

addEventListener("resize", resize);
resize();
requestAnimationFrame(draw);
