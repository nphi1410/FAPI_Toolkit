localStorage.setItem("tableNotice", document.querySelector(".table-bordered").outerHTML);

const url = 'https://fap.fpt.edu.vn/User/UserDetail.aspx';

// Get cookies from the document header
const cookie = document.cookie;

// Send message to background.js with the cookie
chrome.runtime.sendMessage({ action: 'mergeCookies', cookie }, response => {

    const options = {
        method: 'GET',
        headers: {


            'Content-Type': 'application/json',
            'fapcookie': response // Including client-side cookies in the request headers
            
        },
        // body: JSON.stringify({})
    };
    
    
    fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Parse JSON data
    })
    .then(html => {
        // Parse the HTML string into a DOM document
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        var fullName = doc.getElementById('ctl00_mainContent_lblFullname');
        var mss = doc.getElementById('ctl00_mainContent_lblLogin');
        localStorage.setItem("fullName", fullName.textContent.trim());
        localStorage.setItem("mss", mss.textContent.trim());

    })
    .catch(error => {
        console.error('Error:', error.message);
    });


});



