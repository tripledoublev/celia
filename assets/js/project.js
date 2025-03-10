document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenPdf = document.getElementById('fullscreen-pdf');
    const fullscreenCaption = document.getElementById('fullscreen-caption');
    const closeOverlay = document.getElementById('close-overlay');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');
    let currentIndex = 0;
    let currentType = "image";

    function showMedia(index) {
        const item = galleryItems[index];
        const type = item.getAttribute('data-type');
        const caption = item.getAttribute('data-caption');

        currentIndex = index;
        currentType = type;

        if (type === "pdf") {
            let pdfUrl = item.getAttribute('data-pdf');
            if (pdfUrl) {
                fullscreenPdf.src = pdfUrl;
                fullscreenPdf.classList.remove('d-none');
                fullscreenImage.classList.add('d-none');
                fullscreenCaption.classList.add('d-none');
            }
        } else {
            fullscreenImage.src = item.src;
            fullscreenCaption.textContent = caption;
            fullscreenImage.classList.remove('d-none');
            fullscreenCaption.classList.remove('d-none');
            fullscreenPdf.classList.add('d-none');
            fullscreenPdf.src = ""; // Reset PDF src when switching back to image mode
        }

        overlay.classList.remove('d-none');
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showMedia(index);
        });
    });

    closeOverlay.addEventListener('click', function () {
        overlay.classList.add('d-none');
        fullscreenPdf.src = ""; // Reset PDF when closing
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.add('d-none');
            fullscreenPdf.src = ""; // Reset PDF when closing
        }
    });

    prevImage.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        showMedia(currentIndex);
    });

    nextImage.addEventListener('click', function () {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        showMedia(currentIndex);
    });

    document.addEventListener('keydown', function (event) {
        if (!overlay.classList.contains('d-none')) {
            if (event.key === 'ArrowLeft') {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
                showMedia(currentIndex);
            } else if (event.key === 'ArrowRight') {
                currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
                showMedia(currentIndex);
            } else if (event.key === 'Escape') {
                overlay.classList.add('d-none');
                fullscreenPdf.src = ""; // Reset PDF src when closing
            }
        }
    });
});
