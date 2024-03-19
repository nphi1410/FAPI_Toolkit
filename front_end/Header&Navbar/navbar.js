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



//ACCOUNT
var buttonAccount = document.querySelector('#user-menu-button');
var accountMenu = document.querySelector('#user-dropdown');
buttonAccount.addEventListener('click', function(){
    accountMenu.classList.toggle('hidden');
})



