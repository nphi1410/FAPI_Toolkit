//AUTO TURN ON/OFF BUTTON
// Get all navigation items
var navItems = document.querySelectorAll('#dropdownNavbarLink, #user-menu-button, #language-btn');

// Add click event listener to each navigation item
navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function() {
        // Hide all other subNavs
        hideAllSubNavs();

        // Show subNav of the clicked item
        var subNav = navItem.nextElementSibling;
        if (subNav) {
            subNav.classList.remove('hidden');
        }

        // Prevent click event from propagating to the document
        event.stopPropagation();
    });
});

// Function to hide all subNavs
function hideAllSubNavs() {
    var subNavs = document.querySelectorAll('#dropdownNavbar, #user-dropdown, #language-dropdown-menu');
    subNavs.forEach(function(subNav) {
        subNav.classList.add('hidden');
    });
}

// Add click event listener to the document to close subNavs when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#dropdownNavbar, #user-dropdown, #language-dropdown-menu')) {
        hideAllSubNavs();
    }
});


const enDropdown = document.querySelector('#english-dropdown');
const viDropdown = document.querySelector('#vietnamese-dropdown');
console.log(enDropdown, viDropdown);
enDropdown.parentElement.addEventListener('click', function(){
    localStorage.setItem('lang', 'en');
    languageChange();
    location.reload();
})
viDropdown.parentElement.addEventListener('click', function(){
    localStorage.setItem('lang', 'vi');
    languageChange();
    location.reload();
})





