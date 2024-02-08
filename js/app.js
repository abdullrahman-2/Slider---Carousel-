let nextDom = document.getElementById('nex');
let preDom = document.getElementById('pre');
let carouselDom = document.querySelector('.carousel');
let listDom = document.querySelector('.carousel .list');
let thumbDom = document.querySelector('.carousel .thumbnail');

preDom.onclick = function() {
    showSlider('prev');
}

nextDom.onclick = function() {
    showSlider('next');
}

let timeRunning = 3000;

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumb = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listDom.appendChild(itemSlider[0]);
        thumbDom.appendChild(itemThumb[0]);
        carouselDom.classList.add('nex');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listDom.prepend(itemSlider[positionLastItem]);
        thumbDom.prepend(itemThumb[positionLastItem]);
        carouselDom.classList.add('pre');
    }

    setTimeout(()=> {
        carouselDom.classList.remove('nex');
        carouselDom.classList.remove('pre');
    }, 1000);
}

