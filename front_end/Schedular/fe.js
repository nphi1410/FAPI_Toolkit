const url = 'https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx';

// Get cookies from the document header
const cookie = document.cookie;

// Send message to background.js with the cookie
chrome.runtime.sendMessage({ action: 'mergeCookies', cookie }, response => {
    // console.log(response);

    const options = {
        method: 'GET',
        headers: {


            'Content-Type': 'application/json',
            'fapcookie': response // Including client-side cookies in the request headers
            
        },
        // body: JSON.stringify({})
    };
    

    var content = document.querySelector('div.col-md-12');
    content.style.display = 'none'; // Hides the selected element
    
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


        
        const rows = document.querySelectorAll('.row');
        var dataRow = rows[1];
        const scheduleDiv = document.createElement('div');
        scheduleDiv.classList.add('schedule');

        // Append the newly created div to the dataRow
        var style = document.createElement('style');

        style.innerHTML = `
        @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);



        div.table-title {
        display: block;
        margin: auto;
        padding:5px;
        width: 100%;
        }

        .table-title h3 {
        color: #fafafa;
        font-size: 15px;
        font-weight: bold;
        font-style:normal;
        font-family: "Roboto", helvetica, arial, sans-serif;
        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
        text-transform:uppercase;
        }


        /*** Table Styles **/

        .table-fill {
        background: white;
        border-radius:3px;
        border-collapse: collapse;
        height: auto;
        margin: auto;
        padding:5px;
        width: 100%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        animation: float 5s infinite;
        }
        
        th {
        color:#D5DDE5;;
        background:#1b1e24;
        border-bottom:4px solid #9ea7af;
        border-right: 1px solid #343a45;
        font-size:15px;
        font-weight: 100;
        padding:10px;
        text-align:center;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        vertical-align:middle;
        }

        th:first-child {
        border-top-left-radius:3px;
        }
        
        th:last-child {
        border-top-right-radius:3px;
        border-right:none;
        }
        
        tr {
        border-top: 1px solid #C1C3D1;
        border-bottom-: 1px solid #C1C3D1;
        color:#666B85;
        font-size:12px;
        font-weight:normal;
        text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
        }
        
        tr:hover td {
        transition: 300ms;  
        background:#4E5066;
        color:#FFFFFF;
        border-top: 1px solid #22262e;
        }
        
        tr:first-child {
        border-top:none;
        }

        tr:last-child {
        border-bottom:none;
        }
        
        tr:nth-child(odd) td {
        background:#EBEBEB;
        }
        
        tr:nth-child(odd):hover td {
        background:#4E5066;
        }

        tr:last-child td:first-child {
        border-bottom-left-radius:3px;
        }
        
        tr:last-child td:last-child {
        border-bottom-right-radius:3px;
        }
        
        td {
        background:#FFFFFF;
        padding:3px;
        text-align:center;
        vertical-align:middle;
        font-weight:300;
        font-size:15px;
        text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
        border-right: 1px solid #C1C3D1;
        }


        `;
        document.body.appendChild(style);
        
        scheduleDiv.classList.add('table-title');
        dataRow.appendChild(scheduleDiv);
        var Tbls = doc.getElementsByTagName('table');
        var mainTable = document.createElement('table');
        mainTable.classList.add('table-fill');
        scheduleDiv.appendChild(mainTable);

        var yearTh = Tbls[2].querySelectorAll('th');
        yearTh[0].innerHTML = '';
        
         // Copy HTML content from Tbls[2] table to mainTable
        mainTable.innerHTML = Tbls[2].innerHTML;
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


});