// DARKMODE FUNCTION
const checkbox = document.getElementById("darkmode-checkbox");
console.log(checkbox);
check = () => {
    if(checkbox.checked){
        document.body.classList.toggle("darkmode-theme");
        document.querySelector('.row .col-md-12').classList.toggle('darkmode');
    }
    else {
        document.body.classList.remove("darkmode-theme");
        document.querySelector('.row .col-md-12').classList.remove('darkmode');
    }
}

save = () => {
    localStorage.setItem("darkmode", checkbox.checked);
}
load = () => {
    var checked = JSON.parse(localStorage.getItem('darkmode'));
    checkbox.checked = checked;
    check();
}
document.body.onload = () => {load();}

checkbox.onclick = () => {
    save();
    load();
}



// // DARKMODE FUNCTION
// const checkbox = document.getElementById("header-darkmode-checkbox");
// console.log(checkbox);
// check = () => {
//     if(checkbox.checked){
//         document.body.classList.toggle("darkmode-theme");
//         document.querySelector('.row .col-md-12').classList.toggle('darkmode');
//     }
//     else {
//         document.body.classList.remove("darkmode-theme");
//         document.querySelector('.row .col-md-12').classList.remove('darkmode');
//     }
// }

// save = () => {
//     localStorage.setItem("darkmode", checkbox.checked);
// }
// load = () => {
//     var checked = JSON.parse(localStorage.getItem('darkmode'));
//     checkbox.checked = checked;
//     check();
// }
// document.body.onload = () => {load();}

// checkbox.onclick = () => {
//     save();
//     load();
// }



