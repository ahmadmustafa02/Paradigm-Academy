document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/student-mobile.webp',
        'images/student-2.webp',
        'images/student-3.webp'
    ];
    let currentIndex = 0;

    const imgElement = document.getElementById('changing-pic');
    
    if (imgElement) {
        setInterval(function() {
            imgElement.classList.add('fade-out');
            setTimeout(function() {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
                imgElement.classList.remove('fade-out');
            }, 1000); // Duration of the fade out transition
        }, 3000); // Change image every 3 seconds
    } else {
        console.error('Element with ID "changing-pic" not found.');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

