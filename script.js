const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");

let count = 0;

const texts = [
  "Nu te mai poti gandi un pic? 😢",
  "Serios??",
  "Hai te rog 🥺",
  "Ma ranesti 💔",
  "Da de ce??? 😭",
  "Parca ma iubeai 😭",
  "Hai ca ai timp sa te gandesti! 😈"

];

// NO fuge + YES crește
noBtn.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  count++;

  question.textContent = texts[Math.min(count, texts.length - 1)];

  // YES devine gigantic
  yesBtn.style.transform = `scale(${1 + count * 0.3})`;

  // NO fuge random
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
