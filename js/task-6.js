const inputRef = document.querySelector(`#validation-input`);
const rightLength = inputRef.length === 
console.dir(inputRef)
//inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);


function handleInputBlur() {
    if (inputRef.selectionEnd === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}