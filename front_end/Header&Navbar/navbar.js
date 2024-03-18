var dropdown = document.querySelectorAll('#dropdownNavbarLink');
dropdown.forEach(element => {
    element.addEventListener('click', function() {
        element.nextElementSibling.classList.toggle('hidden');
    })
});