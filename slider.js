let currentPage = 0;
const pages = document.querySelectorAll('.slider-page');
const totalPages = pages.length;
const paginationDots = document.querySelectorAll('.pagination-dot');

// Navigation Buttons
document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateSlider();
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateSlider();
    }
});

// Pagination Dots
paginationDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentPage = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
});

// Update Slider and Pagination
function updateSlider() {
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentPage * sliderWidth}px)`;

    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[currentPage].classList.add('active');
}

// Touch Slide
let startX = 0;

document.getElementById('slider').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.getElementById('slider').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        // Swipe left
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateSlider();
        }
    } else if (startX < endX - 50) {
        // Swipe right
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    }
});