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


document.addEventListener('DOMContentLoaded', function() {
    const hiddenNavigationMenu = document.querySelector('.hidden-navigation-menu');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    hiddenNavigationMenu.addEventListener('click', function() {
        
        if (dropdownContent.style.height === 'auto') {
            dropdownContent.style.height = '0'; n
        } else {
            dropdownContent.style.height = 'auto'; 
        }
    });
    
    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !hiddenNavigationMenu.contains(event.target)) {
            dropdownContent.style.height = '0px'; 
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const hiddenLink = document.getElementById('hidden-link');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const bmulebiHiddenLink = document.getElementById('bmulebi-hidden-link');
    const bmulebiDropdownMenu = document.getElementById('bmulebi-dropdownMenu');

    function closeAllDropdowns() {
        hiddenLink.classList.remove('hidden-link-active');
        bmulebiHiddenLink.classList.remove('bmulebi-link-active');
    }

    hiddenLink.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (bmulebiHiddenLink.classList.contains('bmulebi-link-active')) {
            closeAllDropdowns();
        }
        hiddenLink.classList.toggle('hidden-link-active');
    });

    bmulebiHiddenLink.addEventListener('click', function(event) {
        event.stopPropagation(); 
        if (hiddenLink.classList.contains('hidden-link-active')) {
            closeAllDropdowns();
        }
        bmulebiHiddenLink.classList.toggle('bmulebi-link-active');
    });

    document.addEventListener('click', function() {
        closeAllDropdowns(); 
    });

    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });

    bmulebiDropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});


function goToPage(){
    window.location.href = "search result/search.html";
}