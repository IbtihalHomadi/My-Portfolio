document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Reset the form
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}


// Close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox(); // Close the lightbox if the background (outside the image) is clicked
    }
});






// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
