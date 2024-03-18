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
        padding:2px;
        width: 100%;
        background-color: none;
        border: 0;

        // height: 500px;
        // overflow-y: scroll;
        }

        

        /*** Table Styles **/

        .table-fill {
        border-collapse: collapse;
        border-spacing: 0;
        height: auto;
        margin: auto;
        width: 100%;
        box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.2), 10px -10px 10px rgba(0, 0, 0, 0.2), -10px 10px 10px rgba(0, 0, 0, 0.2), 10px 10px 10px rgba(0, 0, 0,0.2);
        }

        .table-title th{
            color: rgb(55 65 81 / var(--tw-text-opacity));
            background:#ffffff;
            font-size:15px;
            font-weight: bold;
            text-transform: none !important;
            padding:10px;
            text-align:center;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            vertical-align:middle;
        }
        .stRow th{
            padding: 20px 30px;
            width:100px;
        }

        .ndRow th {
            border: 1px solid lightgray;
        }


        .table-title tr {
        border-top: 1px solid #C1C3D1;
        border-bottom-: 1px solid #C1C3D1;
        
        border: 1px solid lightgray;
        color:#666B85;
        font-size:12px;
        font-weight:normal;
        text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
        }
        
        .table-title td:hover {
            transition: 300ms;
            background-color: rgba(170,170,170,0.1);
            
        }
        
        .table-title td {
            background:#FFFFFF;
            padding:2px;
            text-align:center;
            vertical-align:middle;
            font-weight:300;
            font-size:13px;
            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
            border: 1px solid lightgray;
        }
        
        .table-title tr:first-child {
        border-top:none;
        }

        .table-title tr:last-child {
        border-bottom:none;
        }

        .tblBody tr{
            height:68px;
        }
        .pContent {
            border-radius: 5px;
            height: 70px; 
            overflow: visible; 
            position: relative; 
        }
        
        .pContent p {
            // height: 140px; 
            padding: 20px 5px;
            border-radius: 5px;
            position: absolute; 
            // top: 0; 
            left: 0; 
            width: 100%; 
        }
        `;
        document.body.appendChild(style);
        
        scheduleDiv.classList.add('table-title');
        dataRow.appendChild(scheduleDiv);
        var Tbls = doc.getElementsByTagName('table');
        var mainTable = document.createElement('table');
        mainTable.classList.add('table-fill');
        scheduleDiv.appendChild(mainTable);
        var tblHead = document.createElement('thead');

        //1st head row
        {
            // Get the current date
            var currentDate = new Date();

            // Define an array of month names
            var monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
            ];

            // Get the month and year
            var currentMonth = monthNames[currentDate.getMonth()];
            var currentYear = currentDate.getFullYear();

            // Construct the string with the current month and year
            var currentMonthAndYear = currentMonth + " " + currentYear;
        }
        var stRow = document.createElement('tr');
        var stRowTh = document.createElement('th');
        stRowTh.innerHTML = currentMonthAndYear;
        stRow.appendChild(stRowTh);
        for(var i =0; i<7;i++){
            var stRowEmptyTh = document.createElement('th');
            stRowEmptyTh.innerHTML = '';
            stRow.appendChild(stRowEmptyTh);
        }
        stRow.classList.add('stRow');
        tblHead.appendChild(stRow);

        //2nd head row
        const daysofweek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var ndRow = document.createElement('tr');
        ndRow.classList.add('ndRow');
        var ndRowEmptyTh = document.createElement('th');
        ndRowEmptyTh.innerHTML = ' ';
        ndRow.appendChild(ndRowEmptyTh);

        var currentDate = new Date();
        var currentDayOfWeek = currentDate.getDay();

        for (var i = 1 - currentDayOfWeek; i <= 7 - currentDayOfWeek; i++) {
            var day = new Date(currentDate);
            day.setDate(currentDate.getDate() + i);
            var ndRowTh = document.createElement('th');
            ndRowTh.innerHTML = `${daysofweek[(i + 7) % 7]} ${day.getDate()}`;

            ndRow.appendChild(ndRowTh);
        }
        
        tblHead.appendChild(ndRow);
        mainTable.appendChild(tblHead);

        // table body
        // null cells
        var tblBody = Tbls[2].querySelector('tbody');
        var bodyTds = tblBody.querySelectorAll('td');
        bodyTds.forEach(td => {
            if (td.innerHTML === '-') { 
                td.innerHTML = ' ';
            }
        });
        // content  cells
        var colors = ['#ff2200', '#7bff00', '#00fffb', '#66ff00', '#ff7700', '#6eff00', '#ffd900', '#0066ff', '#ffa200', '#2bff00', '#ff0d00', '#00eeff'];
        var pTags = tblBody.querySelectorAll('p');
        pTags.forEach(p => {
            var pDiv = document.createElement('div');
            pDiv.classList.add('pContent');

            // Set random background color for p element
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.backgroundColor = `rgba(${parseInt(randomColor.substring(1, 3), 16)}, ${parseInt(randomColor.substring(3, 5), 16)}, ${parseInt(randomColor.substring(5, 7), 16)}, 0.2)`;
            
            var aTags = p.querySelectorAll('a');
            for (var i = 1; i< aTags.length; i++) {
                if(aTags[i].getAttribute('href')){
                    aTags[i].innerHTML = '';
                }
                
            }

            var td = p.closest('td'); 
            
            pDiv.appendChild(p);// Find the closest td ancestor
            td.appendChild(pDiv);
        });

        // time slot
        var slotRows = tblBody.querySelectorAll('tr');
        var startTime = new Date();
        startTime.setHours(7);
        startTime.setMinutes(30);

        slotRows.forEach((slotRow, index) => {
            var time = new Date(startTime);
            time.setMinutes(startTime.getMinutes() + index * 70); 
            var slotCell = slotRow.querySelector('td');
            var formattedTime = ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2);
            slotCell.innerHTML = formattedTime;
        });

        //filter slot
        for (var r = 0; r < slotRows.length; r++) {
            var contentCells = slotRows[r].querySelectorAll('td');
            for (var i = 1; i < contentCells.length; i++) {
                var durationSpan = contentCells[i].querySelector('.label-success');
                
                if (durationSpan) {
                    var timeSpan = durationSpan.innerHTML;
                    var startIdx = timeSpan.indexOf('(') + 1;
                    var endIdx = timeSpan.indexOf('-');
                    var startTime = timeSpan.substring(startIdx, endIdx).trim();
                    var endTime = timeSpan.substring(endIdx + 1, timeSpan.indexOf(')')).trim();
                    
                    var startHours = parseInt(startTime.split(':')[0]);
                    var startMinutes = parseInt(startTime.split(':')[1]);
                    var startSlot = startHours * 60 + startMinutes;

                    var endHours = parseInt(endTime.split(':')[0]);
                    var endMinutes = parseInt(endTime.split(':')[1]);
                    var endSlot = endHours * 60 + endMinutes;

                    var slotHeight = endSlot - startSlot;
                    var stCell = contentCells[0].innerHTML;
                    var stHours = parseInt(stCell.split(':')[0]);
                    var stMinutes = parseInt(stCell.split(':')[1]);
                    var stSlot = stHours * 60 + stMinutes;
                    var topPosition = (startSlot - stSlot) * 1;
        
                    var pParent = durationSpan.closest('p');
                    pParent.style.height = slotHeight + 'px';
                    pParent.style.top = topPosition + 'px'; 
                }
            }
        }
        
        
        
        tblBody.classList.add('tblBody');
        mainTable.appendChild(tblBody);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


});