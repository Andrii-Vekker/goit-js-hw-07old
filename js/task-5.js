const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output')
inputRef.addEventListener('input', handleInputChange)

function handleInputChange(event) {

    inputRef.value  ? nameRef.textContent = event.target.value : nameRef.textContent = `незнакомец`;
}
const ref = {
    inputRef: document.querySelector('#name-input'),
    spanRef: document.querySelector('#name-output')
};
ref.inputRef.addEventListener('input', handleTextInput);
function handleTextInput(event) {
    ref.inputRef.value
        ? ref.spanRef.textContent = event.target.value
        : ref.spanRef.textContent = 'незнакомец';
};