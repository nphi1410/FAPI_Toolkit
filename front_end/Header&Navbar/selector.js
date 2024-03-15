// localStorage.setItem("tableNotice", document.querySelector(".table-bordered").outerHTML);

const urlAccount = 'https://fap.fpt.edu.vn/User/UserDetail.aspx';
const urlHome = 'https://fap.fpt.edu.vn/Student.aspx';

// Get cookies from the document header
const cookieAccount = document.cookie;
const cookieHome = document.cookie;

// Send message to background.js with the cookie
chrome.runtime.sendMessage({ action: 'mergeCookies', cookieAccount }, response => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'fapcookie': response // Including client-side cookies in the request headers
        },
        // body: JSON.stringify({})
    };
    fetch(urlAccount, options)
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

chrome.runtime.sendMessage({ action: 'mergeCookies', cookieHome }, response => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'fapcookie': response // Including client-side cookies in the request headers
        },
        // body: JSON.stringify({})
    };
    fetch(urlHome, options)
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
        var tableNotice = doc.querySelector(".table-bordered");
        localStorage.setItem("tableNotice", tableNotice.outerHTML);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});



