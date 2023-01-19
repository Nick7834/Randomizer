const num = document.querySelector('#num')
const inp = document.querySelectorAll('.inp');
const button = document.querySelector('.button');
const reset = document.querySelector('.reset');

button.addEventListener('click', Rez);
reset.addEventListener('click', () => {
    num.innerHTML = 0;

    inp[1].value = '';
    inp[0].value = '';
});

function Random(min, max) {
    num.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
}

function Rez() {
    const min = Number(inp[1].value);
    const max = Number(inp[0].value);

    return Random(min, max);
}
