document.addEventListener('DOMContentLoaded', function() {
    // Project progress bars animation
    const projectProgress = document.querySelectorAll('.prog .progress span');
    projectProgress.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Filter projects by type
    const projectTypes = document.querySelectorAll('.do span');
    projectTypes.forEach(type => {
        type.addEventListener('click', function() {
            const typeText = this.textContent.toLowerCase();
            const projects = document.querySelectorAll('.projects-boxs');
            
            projects.forEach(project => {
                const projectTypes = project.querySelector('.do').textContent.toLowerCase();
                if(projectTypes.includes(typeText)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});