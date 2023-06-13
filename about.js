window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.skill img');
    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px)'; // Move the image up by 10 pixels on hover
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)'; // Reset the image position on mouseout
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    var skills = document.getElementById('skills');
    skills.style.animationPlayState = 'running';
});