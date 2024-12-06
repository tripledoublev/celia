document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeOverlay = document.getElementById('close-overlay');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');
    let currentIndex = 0;

    function showImage(index) {
        const item = galleryItems[index];
        fullscreenImage.src = item.src;
        fullscreenCaption.textContent = item.getAttribute('data-caption');
        overlay.classList.remove('d-none');
        currentIndex = index;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showImage(index);
        });
    });

    closeOverlay.addEventListener('click', function () {
        overlay.classList.add('d-none');
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.add('d-none');
        }
    });

    prevImage.addEventListener('click', function () {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }
    });

    nextImage.addEventListener('click', function () {
        if (currentIndex < galleryItems.length - 1) {
            showImage(currentIndex + 1);
        }
    });

    document.addEventListener('keydown', function (event) {
        if (!overlay.classList.contains('d-none')) {
            if (event.key === 'ArrowLeft' && currentIndex > 0) {
                showImage(currentIndex - 1);
            } else if (event.key === 'ArrowRight' && currentIndex < galleryItems.length - 1) {
                showImage(currentIndex + 1);
            } else if (event.key === 'Escape') {
                overlay.classList.add('d-none');
            }
        }
    });
});