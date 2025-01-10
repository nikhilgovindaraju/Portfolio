// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    const url = './NikhilGovindaraju.pdf';
    const canvas = document.getElementById('pdf-render');
    const loadingTask = pdfjsLib.getDocument(url);

    loadingTask.promise.then(function(pdf) {
        // Get the first page
        return pdf.getPage(1).then(function(page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Set canvas dimensions
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: viewport
            };

            // Render the page
            return page.render(renderContext).promise;
        });
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
    });
});
