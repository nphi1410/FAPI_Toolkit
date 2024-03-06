const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const { extractSchedule } = require('./extractData');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post("/schedule", async (req, res) => {
    const cookie = req.headers.cookie;

    try {
        const response = await axios.get('https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx', {
            headers: {
                cookie
            }
        });

        const data = await extractSchedule(response.data);
        res.send(data); 
        console.log("data: ", data);// Send data as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' }); // Send error as JSON response
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
