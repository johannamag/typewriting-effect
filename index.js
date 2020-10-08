const texts = [
  "You are a good listener.",
  "Let´s agree to disagree.",
  "I believe in living a minimalist lifestyle.",
  "You only live once.",
  "Being a mother is the most rewarding thing I´ve ever done.",
  "I`m not judging you, but...",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
