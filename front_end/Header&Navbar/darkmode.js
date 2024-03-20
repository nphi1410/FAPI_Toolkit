// DARKMODE FUNCTION
const checkbox = document.getElementById("darkmode-checkbox");
check = () => {
    if(checkbox.checked){
        document.body.classList.toggle("darkmode-theme");
        document.querySelector('.row .col-md-12').classList.toggle('darkmode');
        document.documentElement.classList.toggle('dark');
    }
    else {
        document.body.classList.remove("darkmode-theme");
        document.querySelector('.row .col-md-12').classList.remove('darkmode');
        document.documentElement.classList.remove('dark');
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




