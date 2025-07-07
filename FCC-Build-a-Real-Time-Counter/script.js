const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const MAX_LENGTH = 50;

textInput.addEventListener('input', () => {
  if (textInput.value.length > MAX_LENGTH) {
    textInput.value = textInput.value.slice(0, MAX_LENGTH);
  }
  if (textInput.value.length === 50) {
    charCount.style.color = 'red';
  }

  charCount.textContent = `Character Count: ${textInput.value.length}/50`;
});