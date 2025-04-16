let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

let timeRunning = 2000;
let timeAutoNext = 7000;
let runTimeOut;
let isSliding = false;

let runAutoRun = setInterval(() => {
    if (!isSliding) {
        nextDom.click();
    }
}, timeAutoNext);


nextDom.onclick = function() {
    if (!isSliding) { 
        showSlider('next');
    }
};

prevDom.onclick = function() {
    if (!isSliding) {
        showSlider('prev');
    }
};

function showSlider(type) {
    if (isSliding) return;
    isSliding = true;

    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
        isSliding = false;
    }, timeRunning);

    // clearInterval(runAutoRun);

}