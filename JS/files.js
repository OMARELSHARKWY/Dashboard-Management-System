document.addEventListener('DOMContentLoaded', function() {
    // File download functionality
    const downloadIcons = document.querySelectorAll('.fa-download');
    
    downloadIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const fileCard = this.closest('.files');
            const fileName = fileCard.querySelector('h3').textContent;
            const fileType = fileCard.querySelector('img').alt.replace('.svg', '');
            
            alert(`Downloading ${fileName} (${fileType.toUpperCase()} file)`);
            // In a real app, this would initiate a file download
        });
    });
    
    // File type filtering
    const fileImages = document.querySelectorAll('.image img');
    fileImages.forEach(img => {
        img.addEventListener('click', function() {
            const fileType = this.alt.replace('.svg', '');
            const allFiles = document.querySelectorAll('.files');
            
            allFiles.forEach(file => {
                const currentType = file.querySelector('img').alt.replace('.svg', '');
                if(currentType === fileType) {
                    file.style.display = 'block';
                } else {
                    file.style.display = 'none';
                }
            });
        });
    });
});