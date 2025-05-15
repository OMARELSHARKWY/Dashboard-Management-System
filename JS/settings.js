document.addEventListener('DOMContentLoaded', function() {
    // Website control toggle
    const websiteToggle = document.querySelector('.website-control input[type="checkbox"]');
    const closeMessage = document.querySelector('.website-control textarea');
    
    websiteToggle.addEventListener('change', function() {
        closeMessage.disabled = !this.checked;
        console.log(`Website ${this.checked ? 'open' : 'closed'}`);
    });
    
    // Widget control checkboxes
    const widgetCheckboxes = document.querySelectorAll('.Widgets-Control input[type="checkbox"]');
    widgetCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const widgetName = this.nextElementSibling.textContent;
            console.log(`${widgetName} widget ${this.checked ? 'shown' : 'hidden'}`);
        });
    });
    
    // Backup server selection
    const serverRadios = document.querySelectorAll('.servers input[type="radio"]');
    serverRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if(this.checked) {
                const serverName = this.nextElementSibling.querySelector('label').textContent.trim();
                console.log(`Selected backup server: ${serverName}`);
            }
        });
    });
});