let value = 0;


function decrement() {
    value -= 1;
    render();
}
function increment() {
    value += 1;
    render();
}
function render() {
    ref.valueRef.textContent = value;
}

const ref = {
    incrementRef: document.querySelector('button[data-action = "increment"]'),
    decrementRef: document.querySelector('button[data-action = "decrement"]'),
    valueRef: document.querySelector('#value'),
};
console.log(ref.incrementRef)
ref.decrementRef.addEventListener('click', decrement);
ref.incrementRef.addEventListener('click', increment);