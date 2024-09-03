document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    let startX, currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function handleDotClick(event) {
        const value = parseInt(event.target.getAttribute('data-value'), 10);
        showSlide(value);
    }

    function handleMouseDown(event) {
        startX = event.clientX;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove(event) {
        const moveX = event.clientX - startX;
        const threshold = 50; 
        if (moveX < -threshold && currentIndex < slides.length - 1) {
            showSlide(currentIndex + 1);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        } else if (moveX > threshold && currentIndex > 0) {
            showSlide(currentIndex - 1);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }

    function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    }

    function handleTouchMove(event) {
        const moveX = event.touches[0].clientX - startX;
        const threshold = 50; 
        if (moveX < -threshold && currentIndex < slides.length - 1) {
            showSlide(currentIndex + 1);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        } else if (moveX > threshold && currentIndex > 0) {
            showSlide(currentIndex - 1);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        }
    }

    function handleTouchEnd() {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    }

    
    showSlide(0);

    
    dots.forEach(dot => {
        dot.addEventListener('click', handleDotClick);
    });

    
    slides.forEach(slide => {
        slide.addEventListener('mousedown', handleMouseDown);
        slide.addEventListener('touchstart', handleTouchStart);
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

