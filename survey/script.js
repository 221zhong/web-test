const form = document.querySelector("#giftSurvey");
const cards = [...document.querySelectorAll(".question-card")];
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const result = document.querySelector("#result");
const summary = document.querySelector("#summary");
const copyButton = document.querySelector("#copyButton");
const editButton = document.querySelector("#editButton");

function isAnswered(card) {
  const textFields = [...card.querySelectorAll("input[type='text'], textarea")];
  const choices = [...card.querySelectorAll("input[type='checkbox'], input[type='radio']")];
  return textFields.some(field => field.value.trim()) || choices.some(field => field.checked);
}

function updateProgress() {
  const answered = cards.filter(isAnswered).length;
  progressBar.style.width = `${answered / cards.length * 100}%`;
  progressText.textContent = `已完成 ${answered} / ${cards.length}`;
}

function buildSummary() {
  const data = new FormData(form);
  const grouped = new Map();
  for (const [key, rawValue] of data.entries()) {
    const value = rawValue.trim();
    if (!value) continue;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(value);
  }
  return [...grouped.entries()].map(([key, values]) => `${key}：${values.join("、")}`).join("\n");
}

form.addEventListener("input", updateProgress);
form.addEventListener("change", updateProgress);

form.addEventListener("submit", event => {
  event.preventDefault();
  summary.textContent = buildSummary();
  form.hidden = true;
  result.classList.add("show");
  result.setAttribute("aria-hidden", "false");
  scrollTo({ top: 0, behavior: "smooth" });
});

copyButton.addEventListener("click", async () => {
  const text = `礼物喜好调查\n\n${summary.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "已复制 ✓";
  } catch {
    const range = document.createRange();
    range.selectNode(summary);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
    copyButton.textContent = "请手动复制选中文字";
  }
});

editButton.addEventListener("click", () => {
  result.classList.remove("show");
  result.setAttribute("aria-hidden", "true");
  form.hidden = false;
  copyButton.textContent = "复制答案发给对方";
  scrollTo({ top: 0, behavior: "smooth" });
});

updateProgress();
