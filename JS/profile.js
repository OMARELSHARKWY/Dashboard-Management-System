document.addEventListener('DOMContentLoaded', function() {
    // Profile toggle switches
    const toggleSwitches = document.querySelectorAll('.toggel-switch');
    
    toggleSwitches.forEach(switchElement => {
        switchElement.addEventListener('click', function() {
            const checkbox = this.previousElementSibling;
            checkbox.checked = !checkbox.checked;
            this.style.backgroundColor = checkbox.checked ? '#0075ff' : '#ccc';
            
            // Save preference to backend in a real app
            const settingName = this.closest('.box').querySelector('h4').textContent;
            console.log(`${settingName} set to ${checkbox.checked}`);
        });
    });
    
    // Skill tags interaction
    const skills = document.querySelectorAll('.skills-card li span');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.classList.toggle('selected-skill');
            // In a real app, this could update user's highlighted skills
        });
    });
});