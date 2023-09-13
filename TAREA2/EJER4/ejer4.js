const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const interval = 3000; // Change image every 3 seconds

function changeSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    changeSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    changeSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatically change slide every interval
setInterval(nextSlide, interval);
