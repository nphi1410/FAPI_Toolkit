
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
searchBar.addEventListener('focus', () => {
    searchDropdown.style.display = 'block';
});
searchBar.addEventListener('blur', () => {
    searchDropdown.style.display = 'none';
});