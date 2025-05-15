document.addEventListener('DOMContentLoaded', function() {
    // Friend interaction functionality
    const profileButtons = document.querySelectorAll('.btns span:first-child');
    const removeButtons = document.querySelectorAll('.btns span:last-child');
    
    profileButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const friendName = this.closest('.friends').querySelector('h3').textContent;
            // In a real app, this would redirect to the profile page
            alert(`Viewing profile of ${friendName}`);
        });
    });
    
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const friendCard = this.closest('.friends');
            if(confirm('Are you sure you want to remove this friend?')) {
                friendCard.style.transform = 'scale(0)';
                setTimeout(() => {
                    friendCard.remove();
                }, 300);
            }
        });
    });
});