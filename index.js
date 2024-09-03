
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
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


document.addEventListener('DOMContentLoaded', function() {
    const mapNames = document.querySelectorAll('.map-name');

    function hideAllMaps() {
        document.querySelectorAll('.map-box').forEach(mapBox => {
            mapBox.classList.remove('active');
        });
    }

    mapNames.forEach(mapName => {
        mapName.addEventListener('click', function() {
            hideAllMaps();
            const id = this.id;
            const mapBox = document.getElementById(id + 'Map');
            if (mapBox) {
                mapBox.classList.add('active');
            }
        });
    });
});



