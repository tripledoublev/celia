document.addEventListener('DOMContentLoaded', function () {
    const pressItems = document.querySelectorAll('.press li a');
    const overlay = document.getElementById('fullscreen-overlay');
    const fullscreenPdf = document.getElementById('fullscreen-pdf');
    const closeOverlay = document.getElementById('close-overlay');
    
    // Add event listeners to each press item
    pressItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            // Prevent the default action (opening in new tab)
            e.preventDefault();
            
            // Get the PDF URL from href attribute
            const pdfUrl = this.getAttribute('href');
            
            // Set the PDF source in the iframe
            fullscreenPdf.src = pdfUrl;
            fullscreenPdf.classList.remove('d-none');
            
            // Show the overlay
            overlay.classList.remove('d-none');
        });
    });
    
    // Close overlay when clicking the close button
    closeOverlay.addEventListener('click', function () {
        overlay.classList.add('d-none');
        fullscreenPdf.src = ""; // Reset PDF when closing
    });
    
    // Close overlay when clicking outside the PDF
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.classList.add('d-none');
            fullscreenPdf.src = ""; // Reset PDF when closing
        }
    });
    
    // Close overlay with Escape key
    document.addEventListener('keydown', function (event) {
        if (!overlay.classList.contains('d-none') && event.key === 'Escape') {
            overlay.classList.add('d-none');
            fullscreenPdf.src = ""; // Reset PDF when closing
        }
    });
}); 