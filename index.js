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


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.header-article-box');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const pageNumbers = document.querySelectorAll('.page-number .page');
    let currentIndex = 0;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        pageNumbers.forEach((page, index) => {
            page.classList.toggle('active', index === currentIndex);
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    pageNumbers.forEach((page, index) => {
        page.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Initialize slider
    updateSlider();
});
