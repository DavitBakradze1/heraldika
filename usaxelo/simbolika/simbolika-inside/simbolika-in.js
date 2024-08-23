document.getElementById('popupText').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) { 
        document.getElementById('popup').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    }
});