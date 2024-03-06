const url = 'http://localhost:3000/schedule';
chrome.cookies.getAll({ domain: "fap.fpt.edu.vn" }, function(cookies){
    for (var i = 0; i<cookies.length; i++) {
        console.log(cookies);
    }
});
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'fapcookie': cookie // Including client-side cookies in the request headers
    },
    body: JSON.stringify({})
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Use response.text() instead of response.json()
    })
    .then(data => {
        if (data.length === 0) {
            console.log('Response is empty or null.');
        } else {
            const parsedData = JSON.parse(data);
            console.log('Response:', parsedData);
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


