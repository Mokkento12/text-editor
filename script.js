const textArea = document.getElementById("text-area");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");
const toggleCaseBtn = document.getElementById("toggle-case-btn");

clearBtn.addEventListener("click", () => {
  textArea.value = "";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(textArea.value)
    .then(() => {
      alert("Текст скопирован!");
    })
    .catch((err) => {
      console.error("Ошибка при копировании:", err);
    });
});

toggleCaseBtn.addEventListener("click", () => {
  const currentText = textArea.value;

  if (currentText === currentText.toUpperCase()) {
    textArea.value = currentText.toLowerCase();
  } else {
    textArea.value = currentText.toUpperCase();
  }
});
