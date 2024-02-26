const express = require('express');
const app = express();
const {data}  = require('./extractData.js');


// Endpoint to serve schedule data
app.get('https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx', (req, res) => {
    // Fetch schedule data from database, file, or external API
    const scheduleData = data; 
    displayData(scheduleData);
    // Send the schedule data as the response
    res.json(scheduleData);
});

console.log(data);

function displayData(data){
    const jsonData = JSON.stringify(data, null, 2);
    
    // Display the JSON string in the console
    console.log(jsonData);
}