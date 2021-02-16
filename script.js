var min = document.getElementById('min');
var max = document.getElementById('max');
var result_box = document.getElementById('result_box');
var x = min.value * 1;
var y = max.value * 1;

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

/**
 * 
 * Switch color theme
 * 
 */

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();