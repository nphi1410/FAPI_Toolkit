const request = require('request');

request.get('https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx', (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    // Print response headers
    console.log('Response Headers:', response.headers);

    // Print request headers
    console.log('Request Headers:', response.request.headers);

    // // Print response body
    // console.log('Response Body:', body);
});

