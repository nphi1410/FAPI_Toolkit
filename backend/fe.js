const url = 'http://localhost:3000/schedule';
const cookie = document.cookie; // Getting cookies from the client-side
console.log(cookie);
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'cookie': cookie // Including client-side cookies in the request headers
    },
    body: JSON.stringify({})
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
