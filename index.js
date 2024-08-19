document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function handleDotClick(event) {
        const value = parseInt(event.target.getAttribute('data-value'), 10);
        showSlide(value);
    }

    showSlide(0);

    dots.forEach(dot => {
        dot.addEventListener('click', handleDotClick);
    });
});


const customSlides = document.querySelector('.custom-slides');
const customSlideCount = document.querySelectorAll('.custom-slide').length;
const customVisibleSlides = 3;
let customCurrentIndex = 0;

const customPrevArrow = document.getElementById('custom-prev');
const customNextArrow = document.getElementById('custom-next');
const customDots = document.querySelectorAll('.custom-dot');

customPrevArrow.addEventListener('click', () => {
    if (customCurrentIndex > 0) {
        customCurrentIndex--;
        customUpdateSlidePosition();
    }
});

customNextArrow.addEventListener('click', () => {
    if (customCurrentIndex < customSlideCount - customVisibleSlides) {
        customCurrentIndex++;
        customUpdateSlidePosition();
    }
});

customDots.forEach(dot => {
    dot.addEventListener('click', () => {
        customCurrentIndex = parseInt(dot.getAttribute('data-index')) * customVisibleSlides;
        customUpdateSlidePosition();
    });
});

function customUpdateSlidePosition() {
    const customOffset = -customCurrentIndex * 100; 
    customSlides.style.transform = `translateX(${customOffset}px)`;
    customUpdateControls();
}

function customUpdateControls() {
    customDots.forEach(dot => dot.classList.remove('active'));
    customDots[Math.floor(customCurrentIndex / customVisibleSlides)].classList.add('active');

    customPrevArrow.classList.toggle('disabled', customCurrentIndex === 0);
    customNextArrow.classList.toggle('disabled', customCurrentIndex === customSlideCount - customVisibleSlides);
}

customUpdateControls();