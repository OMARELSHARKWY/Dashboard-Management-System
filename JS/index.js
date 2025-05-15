document.addEventListener('DOMContentLoaded', function() {
    // Yearly targets progress animation
    const progressBars = document.querySelectorAll('.progress span');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });

    // Latest tasks completion toggle
    const taskIcons = document.querySelectorAll('.latest-tasks .delete');
    taskIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const taskBox = this.closest('.box');
            taskBox.style.opacity = '0';
            setTimeout(() => {
                taskBox.remove();
            }, 300);
        });
    });
});