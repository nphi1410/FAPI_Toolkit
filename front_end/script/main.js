// BODY SHOWING
var fullBody = document.querySelector('.container .row .col-md-12');
// fullBody.style.display = 'none';

//SEARCHING FUNCTION
let searchBar = document.querySelector('.header-search-bar_input');
let searchList = document.querySelectorAll('.header-search-bar_item a');
let searchDropdown = document.querySelector('.header-search-bar_dropdown');
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    searchList.forEach(item => {
        if(item.textContent.toLowerCase().includes(currentValue)) {
            item.parentNode.parentNode.parentNode.style.display = 'block';
            item.parentNode.parentNode.style.display = 'block';
            item.parentNode.style.display = 'block';
        }else {
            item.parentNode.style.display = 'none';
        }
        if(currentValue === "") searchDropdown.style.display = 'none';
    })
});


// DARKMODE FUNCTION
const checkbox = document.getElementById("header-darkmode-checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


// ACCOUNT & SETTING FUNCTION
var setting = document.querySelector('.header-settings');
var settingMenu = setting.querySelector('.header-settings-menu');
setting.onclick = () => {
  if(settingMenu.classList.contains('open')){
    settingMenu.classList.remove('open');
  }else settingMenu.classList.add('open');
}

var account = document.querySelector('.header-account');
var accountMenu = account.querySelector('.header-account-menu');
account.onclick = () => {
  if(accountMenu.classList.contains('open')){
    accountMenu.classList.remove('open');
  }else accountMenu.classList.add('open');
}