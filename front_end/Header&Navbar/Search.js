//SEARCHING FUNCTION
// let searchBar = document.querySelector('.header-search-bar_input');
// let searchList = document.querySelectorAll('.header-search-bar_item a');
// let searchDropdown = document.querySelector('.header-search-bar_dropdown');
// searchBar.addEventListener('keyup', e => {
//     let currentValue = e.target.value.toLowerCase();
//     searchList.forEach(item => {
//         if(item.textContent.toLowerCase().includes(currentValue)) {
//             item.parentNode.parentNode.parentNode.style.display = 'block';
//             item.parentNode.parentNode.style.display = 'block';
//             item.parentNode.style.display = 'block';
//         }else {
//             item.parentNode.style.display = 'none';
//         }
//         if(currentValue === "") searchDropdown.style.display = 'none';
//     })
// });

//SEARCHING FUNCTION
let searchBar = document.querySelector('#search-navbar');
let searchDropdown = document.querySelector('#search-dropdown-menu');
let searchList = searchDropdown.querySelectorAll('a');
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    searchList.forEach(item => {
        if(item.textContent.toLowerCase().includes(currentValue)) {
            item.parentNode.parentNode.parentNode.classList.remove('hidden');
            item.parentNode.parentNode.classList.remove('hidden');
            item.parentNode.classList.remove('hidden');
        }else {
            item.parentNode.classList.add('hidden');
        }
        if(currentValue === "") searchDropdown.classList.add('hidden');
    })
});