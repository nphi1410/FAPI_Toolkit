
extractValues();
var data = [];

function extractValues() {
    var tdElements = document.querySelectorAll('td');
    var isWriting = false; // Flag to track whether to write into the array
    
    var count = 0,slot; // Counter for '-'

    // Initialize an array to store JSON objects
    var schedule = [];

    // Loop through each 'td' element
    tdElements.forEach(function(tdElement) {
        // Extracting values from tdElement
        var aElements = tdElement.querySelectorAll('a');
        var otherValue = tdElement.textContent.trim();
        

        // Create an array to store the text content of 'a' elements
        var aTextContentArray = [];
        var savelinks = [];

        // Loop through each 'a' element and store its text content
        aElements.forEach(function(aElement) {
            var text = aElement.textContent.trim();
            var href = aElement.getAttribute('href');
            
            if (href){
                // console.log("Href:", href);
                // console.log("Text:", text);
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
        
        
        // console.log("Remaining Value:", remainingValue);

        if(otherValue === 'Slot 0'){
            isWriting = true;
            slot = 0;
        } 

        if(slot >= 12){
            isWriting = false;
        }

        if(isWriting) {
            var singleSlot = {
                slot: slot,
                links: savelinks,
                remaining: remainingValue
            };
            schedule.push(singleSlot);
        }
        if (isWriting) {
            count++;
            if (count == 8){
                count = 0;
                slot++;
                
            }
        }

    });

    data = schedule;
    displayData(data);
}

module.exports = data;

function displayData(data){
    const jsonData = JSON.stringify(data, null, 2);
    
    // Display the JSON string in the console
    console.log(jsonData);
}