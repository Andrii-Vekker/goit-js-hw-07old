const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');


const checkSize = function () {
  textRef.style.fontSize = `${inputRef.valueAsNumber}px`;
};
inputRef.addEventListener('input', () => checkSize());