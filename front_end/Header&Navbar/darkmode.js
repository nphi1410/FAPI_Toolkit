// DARKMODE FUNCTION
const checkbox = document.getElementById("header-darkmode-checkbox");
console.log(checkbox);
check = () => {
    if(checkbox.checked) document.body.classList.toggle("darkmode-theme")
    else document.body.classList.remove("darkmode-theme")
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
