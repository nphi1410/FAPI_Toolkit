
var data = [];

const https = require('https');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx';

// extractValuesFromURL(url)
//     .then(scheduleData => {
//         console.log(scheduleData);
//     })
//     .catch(error => {
//         console.error('Error extracting values:', error);
//     });
//     async function fetchHTML(url) {
//         try {
//             const response = await axios.get(url);
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching HTML:', error);
//             return null;
//         }
//     }
    
//     async function extractValuesFromURL(url) {
//         const html = await fetchHTML(url);
//         if (html) {
//             return extractValues(html);
//         } else {
//             return null;
//         }
//     }

https.get(url, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
        console.log(data);
    });
}).on('error', (error) => {
    console.error('Error fetching HTML:', error);
});

function extractValues(htmlString) {
    const $ = cheerio.load(htmlString); // Load HTML string

    var isWriting = false; // Flag to track whether to write into the array
    var count = 0, slot; // Counter for '-'

    // Initialize an array to store JSON objects
    var schedule = [];

    // Loop through each 'td' element
    $('td').each(function() {
        var tdElement = $(this);
        var aElements = tdElement.find('a');
        var otherValue = tdElement.text().trim();

        // Create an array to store the text content of 'a' elements
        var aTextContentArray = [];
        var savelinks = [];

        // Loop through each 'a' element and store its text content
        aElements.each(function() {
            var aElement = $(this);
            var text = aElement.text().trim();
            var href = aElement.attr('href');

            if (href) {
                savelinks.push({ href: href, text: text });
                aTextContentArray.push(text);
            }
        });

        // Remove the text content of 'a' elements from 'td' element
        aTextContentArray.forEach(function(text) {
            otherValue = otherValue.replace(text, '').trim();
        });

        // Extract the desired remaining text (modify this as needed)
        var remainingValue = otherValue; // For now, we just keep the remaining text

        if (otherValue === 'Slot 0') {
            isWriting = true;
            slot = 0;
        }

        if (slot >= 12) {
            isWriting = false;
        }

        if (isWriting) {
            var singleSlot = {
                slot: slot,
                links: savelinks,
                remaining: remainingValue
            };
            schedule.push(singleSlot);
        }
        if (isWriting) {
            count++;
            if (count == 8) {
                count = 0;
                slot++;

            }
        }
    });

    return schedule;
}

module.exports = data;
