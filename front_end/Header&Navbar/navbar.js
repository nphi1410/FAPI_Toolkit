var dropdown = document.querySelectorAll('#dropdownNavbarLink');
dropdown.forEach(element => {
    element.addEventListener('click', function() {
        element.nextElementSibling.classList.toggle('hidden');
    })
});

var subdropdown = document.querySelectorAll('#dropdownNavbar');

document.body.addEventListener('click', function(e) {
    if(e.target.id != 'dropdownNavbarLink'){
        subdropdown.forEach(element => {
            if(!element.classList.contains('hidden')){
                element.classList.add('hidden');
            }
        });
    }
})


