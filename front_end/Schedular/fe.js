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
        var ndRow = document.createElement('tr');
        ndRow.classList.add('ndRow');
        var ndRowEmptyTh = document.createElement('th');
        ndRowEmptyTh.innerHTML = ' ';
        ndRow.appendChild(ndRowEmptyTh);

        var currentDate = new Date();
        var currentDayOfWeek = currentDate.getDay();
        const daysofweek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var startWeek = 0;
        for (var i = 1 - currentDayOfWeek; i <= 7 - currentDayOfWeek; i++) {
            var day = new Date(currentDate);
            day.setDate(currentDate.getDate() + i);
            var ndRowTh = document.createElement('th');
            var dayOfMonthSpan = document.createElement('span');
            dayOfMonthSpan.textContent = day.getDate(); 
            ndRowTh.appendChild(document.createTextNode(daysofweek[startWeek] + ' ')); 
            startWeek++;
            ndRowTh.appendChild(dayOfMonthSpan); 
            if (parseInt(ndRowTh.textContent.split(' ')[1]) === currentDate.getDate()) {
                
                dayOfMonthSpan.style.backgroundColor = 'rgb(26,115,232)'; 
                dayOfMonthSpan.style.borderRadius = '50%'; 
                dayOfMonthSpan.style.color = 'white'; 
                dayOfMonthSpan.style.padding = '5px'; 
            }
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
        
            


        var pTags = tblBody.querySelectorAll('p');
        pTags.forEach(p => {
            if(p.children.length !== 0){
                var pDiv = document.createElement('div');
                pDiv.classList.add('pContent');
            
                var aTags = p.querySelectorAll('a');
                for (var i = 1; i< aTags.length; i++) {
                    if(aTags[i].getAttribute('href')){
                        aTags[i].innerHTML = '';
                    }
                    
                }
                // p.textContent = p.textContent.trim();
                var td = p.closest('td'); 
                // Check if td contains div with class 'online-indicator' and h3 with class 'online-text'
                var onlineIndicatorDiv = td.querySelector('.online-indicator');
                var onlineTextH3 = td.querySelector('.online-text');
                var textH3 = onlineTextH3;
                if (onlineIndicatorDiv && onlineTextH3) {
                    p.innerHTML += ` ${textH3.innerHTML} `;
                    onlineIndicatorDiv.remove();
                    onlineTextH3.remove();
                }

                pDiv.appendChild(p);// Find the closest td ancestor
                td.appendChild(pDiv);
            }
            
        });

        // time slot
        var slotRows = tblBody.querySelectorAll('tr');

        var startTime = new Date();
        startTime.setHours(7);
        startTime.setMinutes(0);

        slotRows.forEach((slotRow, index) => {
            var time = new Date(startTime);
            time.setMinutes(startTime.getMinutes() + index * 60); 
            var slotCell = slotRow.querySelector('td');
            var formattedTime = ('0' + time.getHours()).slice(-2) + ':' + ('0' + time.getMinutes()).slice(-2);
            slotCell.innerHTML = formattedTime;
            
        });

        //align slot
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
                    

                    var rate = 4/6;

                    var startHours = parseInt(startTime.split(':')[0]);
                    var startMinutes = parseInt(startTime.split(':')[1]);
                    var startSlot = startHours * 60 + startMinutes;

                    var endHours = parseInt(endTime.split(':')[0]);
                    var endMinutes = parseInt(endTime.split(':')[1]);
                    var endSlot = endHours * 60 + endMinutes;

                    var slotHeight = (endSlot - startSlot)*rate ;
                    var stCell = contentCells[0].innerHTML;
                    var stHours = parseInt(stCell.split(':')[0]);
                    var stMinutes = parseInt(stCell.split(':')[1]);
                    var stSlot = stHours * 60 + stMinutes;
                    
                    var topPosition = (startSlot - stSlot) * rate+20;
                    

                    var pParent = durationSpan.closest('p');
                    pParent.style.height = slotHeight + 'px';
                    pParent.style.top = topPosition + 'px'; 
                }
            }
        }


        pTags.forEach(p=>{
            p.innerHTML = p.innerHTML.replace(/[()]/g, '');
            var dot = document.createElement('div');
            dot.classList.add('dot');

            var fontTags = p.querySelectorAll('font');
            fontTags.forEach(fontTag => {
                if (fontTag.textContent === 'Not yet') {
                    fontTag.innerHTML = '';
                    dot.style.backgroundColor = 'gray';
                }
                if (fontTag.textContent === 'attended') {
                    fontTag.innerHTML = '';
                    dot.style.backgroundColor = 'lawngreen';
                }if (fontTag.textContent === 'absent') {
                    fontTag.innerHTML = '';
                    dot.style.backgroundColor = 'red';
                }
                // fontTag.appendChild(dot);
            }); 
            var stat = document.createElement('span');
            stat.innerHTML = 'Status: ';
            stat.style.display = 'inline-block';
            if(p.children.length !== 0){
                p.appendChild(stat);
                p.appendChild(dot);
            }
            

            var brs = p.querySelectorAll('br');
            if(brs.length>2){
                brs[brs.length - 2].remove();
            }
        });
        
        var prjNames = tblBody.querySelectorAll('a');
        var indx = [];
        var bgcolor = [
            'rgba(255, 154, 162, 0.5)',
            'rgba(255, 183, 178, 0.5)',
            'rgba(255, 218, 193, 0.5)',
            'rgba(226, 240, 203, 0.5)',
            'rgba(181, 234, 215, 0.5)',
            'rgba(199, 206, 234, 0.5)'
        ];
        
        prjNames.forEach((name,index)=>{
            if(name.innerHTML.includes('-') && !name.innerHTML.includes(':')){
                indx.push({
                    name: name.innerHTML,
                    index : index,
                    checkdup : false,
                    bg: null
                });
            }
        });

        var bdindx = 0;
        for(var i=0; i<indx.length; i++){
            if(indx[i].checkdup === false){
                for(var j=i+1; j<indx.length;j++){
                    if(indx[i].name == indx[j].name){
                        indx[j].checkdup = true;
                        indx[j].bg = bdindx;
                    }
                }
                indx[i].checkdup = true;
                indx[i].bg = bdindx;
                bdindx++;
            }
        }

        console.log(indx);

        for( var i = 0; i < indx.length; i++){
            prjNames[indx[i].index].style.fontWeight = 'bold';
            prjNames[indx[i].index].closest('p').style.backgroundColor = bgcolor[indx[i].bg] ;
        }
        
        tblBody.classList.add('tblBody');
        mainTable.appendChild(tblBody);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


});
