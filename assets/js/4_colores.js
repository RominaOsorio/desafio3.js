const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');

green.style.backgroundColor = 'green'
yellow.style.backgroundColor = 'yellow'
red.style.backgroundColor = 'red'
blue.style.backgroundColor = 'blue'

const pintarBlack = (elemento, color = 'black') =>{
    elemento.style.backgroundColor = color;
};

green.addEventListener('click', ()=>{
    pintarBlack(green);
});

yellow.addEventListener('click', ()=>{
    pintarBlack(yellow);
});

red.addEventListener('click', ()=>{
    pintarBlack(red);
});

blue.addEventListener('click', ()=>{
    pintarBlack(blue);
});



const key = document.querySelector('#key');
const keyDos = document.querySelector('#key2');

const pintar = (elemento, color) => {
    elemento.style.backgroundColor = color;
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pintar(key, 'pink');
    } else if (event.key === 's') {
        pintar(key, 'orange');
    } else if (event.key === 'd') {
        pintar(key, 'aqua');
    }
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        pintar(keyDos, 'purple')
    } else if (event.key === 'w') {
        pintar(keyDos, 'grey')
    } else if (event.key === 'e') {
        pintar(keyDos, 'brown')
    }
});

