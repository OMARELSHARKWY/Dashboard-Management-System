document.addEventListener('DOMContentLoaded', function() {
    // Course enrollment functionality
    const courseInfoButtons = document.querySelectorAll('.courses .info span');
    const moreInfoButtons = document.querySelectorAll('.courses .movieActions button:last-child');
    
    courseInfoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const courseCard = this.closest('.courses');
            const courseDescription = courseCard.querySelector('.text p');
            
            // Toggle full description
            if(courseDescription.style.whiteSpace === 'nowrap') {
                courseDescription.style.whiteSpace = 'normal';
            } else {
                courseDescription.style.whiteSpace = 'nowrap';
            }
        });
    });
    
    moreInfoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const courseTitle = this.closest('.courses').querySelector('.text h3').textContent;
            alert(`More information about: ${courseTitle}`);
        });
    });
});