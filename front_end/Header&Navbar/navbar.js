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

//LANGUAGE
var buttonLangue = document.querySelector('button[data-dropdown-toggle="language-dropdown-menu"]');
var languageMenu = document.querySelector('#language-dropdown-menu');
buttonLangue.addEventListener('click', function(){
    languageMenu.classList.toggle('hidden');
})

//ACCOUNT
var buttonAccount = document.querySelector('#user-menu-button');
var accountMenu = document.querySelector('#user-dropdown');
buttonAccount.addEventListener('click', function(){
    accountMenu.classList.toggle('hidden');
})

//DARKMODE
var darkmodeToggle = document.querySelector('#darkmode-toggle');
var darkmodeCheckbox = document.querySelector('#darkmode-checkbox');
darkmodeToggle.addEventListener('click', function(){
    darkmodeCheckbox.checked = !darkmodeCheckbox.checked;
})


