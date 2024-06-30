window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#666666'; // Change the background color
    } else {
        navbar.style.background = 'linear-gradient(90deg, #000005, #000005)'; // Original gradient color
    }
});
