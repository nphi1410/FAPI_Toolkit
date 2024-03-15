//Remove Body
var fullBody = document.querySelector('.container .row .col-md-12');
fullBody.style.display = 'none';

localStorage.setItem("tableNotice", document.querySelector(".table-bordered").outerHTML);

