document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeOverlay = document.getElementById('close-overlay');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            fullscreenImage.src = this.src;
            fullscreenCaption.textContent = this.getAttribute('data-caption');
            overlay.classList.remove('d-none');
        });
    });

    closeOverlay.addEventListener('click', function () {
        overlay.classList.add('d-none');
    });
});