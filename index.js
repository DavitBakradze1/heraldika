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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 23,
    centeredSlides: false,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1920: {
            slidesPerView: 3,
        }
    }
});

function selectLanguage(code) {
    console.log('Selected language:', code);
    const picker = document.querySelector('.language-picker');
    const flagSrc = {
        'en': 'flag-for-flag-united-kingdom-svgrepo-com.svg',
        'ge': 'flag-for-flag-georgia-svgrepo-com.svg'
    };
    picker.querySelector('img').src = flagSrc[code];
    picker.querySelector('img').alt = code.charAt(0).toUpperCase() + code.slice(1);
}
