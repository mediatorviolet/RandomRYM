var min = document.getElementById('start').value * 1;
var max = document.getElementById('end').value * 1;
var result_box = document.getElementById('result_box');

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
}


var generate = document.getElementById('generate');
generate.addEventListener('click', () => {
    generation(min, max);
});