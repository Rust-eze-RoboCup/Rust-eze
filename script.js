const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= carouselImages.children.length) {
        counter = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = carouselImages.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const size = carouselImages.children[0].clientWidth;
    const offset = -size * counter;
    carouselImages.style.transform = `translateX(${offset}px)`;
}
