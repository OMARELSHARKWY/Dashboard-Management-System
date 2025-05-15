document.addEventListener('DOMContentLoaded', function() {
    // Plan selection functionality
    const joinButtons = document.querySelectorAll('.join');
    
    joinButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.closest('.plan').querySelector('h3').textContent;
            const planPrice = this.closest('.plan').querySelector('p').textContent;
            
            if(confirm(`Join ${planName} plan for ${planPrice}?`)) {
                alert(`Successfully joined ${planName} plan!`);
                // In a real app, this would process payment and upgrade account
            }
        });
    });
    
    // Feature information tooltips
    const infoIcons = document.querySelectorAll('.help');
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const featureText = this.previousElementSibling.textContent;
            alert(`Feature: ${featureText}`);
        });
    });
});