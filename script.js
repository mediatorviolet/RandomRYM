var min = document.getElementById('min');
var max = document.getElementById('max');
var result_box = document.getElementById('result_box');
var x = 0;
var y = 0;

const generation = (min, max) => {
    result_box.classList.remove('d-none');
    var pos = document.getElementById('pos');
    var year = document.getElementById('year');
    var link = document.getElementById('link');
    var position = Math.floor(Math.random() * 1001);
    var page = Math.ceil(position / 40);

    pos.innerHTML = position == 1 ? '1er' : position + 'ème';
    year.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
    link.href = 'https://rateyourmusic.com/charts/top/album/' + year.innerHTML + '/' + page + '/#pos' + position;
};


min.addEventListener('keyup', () => {
    x = min.value * 1;
    console.log(x);
});

max.addEventListener('keyup', () => {
    y = max.value * 1;
    console.log(y);
});

var generate = document.getElementById('generate');
generate.addEventListener('click', () => {
    generation(x, y);
});