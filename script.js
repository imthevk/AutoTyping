const textElement = document.getElementById("text");

const writeText = "Let us code together.";

let idx = 1;
setInterval(typingFunc, 150);

function typingFunc() {
  textElement.innerText = writeText.slice(0, idx);
  idx++;
  if (idx > writeText.length) {
    idx = 1;
  }
}
