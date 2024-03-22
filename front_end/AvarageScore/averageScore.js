// b1 get values from html page
// b2 save it to particular variables
//b3 do smt with data

// var sum += aTags[i].innerText;

const divGrade = document.getElementById("ctl00_mainContent_divGrade");
const tdTags = divGrade.getElementsByTagName("td");
let grades = [];

let avg = 0;

for (let i = 0; i < tdTags.length; i++) {
  const currentInnerText = tdTags[i].innerText.trim();
  const previousInnerText = (i > 0) ? tdTags[i - 1].innerText.trim() : "";

  if (currentInnerText.includes("%") && previousInnerText !== "Total") {
    const percent = parseFloat(currentInnerText);
    let mark = parseFloat(tdTags[i + 1].innerText.trim());

    if (isNaN(mark)) {
      mark = 0;
      grades.push({
        percent: percent,
        mark: mark
      });
    } else {
      grades.push({
        percent: percent,
        mark: mark
      });
    }

    avg += (percent / 100) * mark;
  }
}

// Log the grades array to the console
console.log(grades);

let recAvg = avg;
let nullPoints = [];

for(let i = 0; i<grades.length;i++){
  if(grades[i].mark == 0){
    nullPoints.push({
      percent: grades[i].percent,
      mark: grades[i].mark
    });
  }
}


async function processData(){
  if(grades.length > 0){
      while(recAvg < 4){
        for (let i = 0; i < nullPoints.length - 1; i++) {
          let point = nullPoints[i]; // Get the current point
        
          if (point.mark == 0) {
            if (point.percent >= 20) point.mark += 4;
            else point.mark++;
          } else {
            point.mark++;
          }
        
          if (recAvg > 4) break;
          else recAvg += (point.percent / 100) * point.mark;
        }
      }
    console.log(recAvg.toFixed(1));

    console.log(nullPoints);
    let start = 0;

    for (let i = 0; i < tdTags.length; i++) {
      const currentInnerText = tdTags[i].innerText.trim();
      const nextInnerText = (i + 1 < tdTags.length) ? tdTags[i + 1].innerText.trim() : '';
      const previousInnerText = (i > 0) ? tdTags[i - 1].innerText.trim() : '';

      if (currentInnerText.includes("%") && previousInnerText !== "Total" && nextInnerText === '') {
        tdTags[i+1].innerHTML = nullPoints[start].mark;
        tdTags[i+1].style.color = 'gray';
        start++;
      }
    }


    // Loop through the td tags


    for (let i = 0; i < tdTags.length; i++) {
      const currentInnerText = tdTags[i].innerText.trim();

      // Check if current td tag contains "AVERAGE"
      if (currentInnerText === "AVERAGE" && i + 1 < tdTags.length) {
        // Get the next td tag
        tdTags[i + 1].innerHTML = avg.toFixed(1) + " recommend: "+ recAvg.toFixed(1);
        break; // Exit the loop once found
      }
    }
  }  
}


async function checkURLAndProcessData() {
    const url = window.location.href;

    // Check if the URL has parameters
    const paramsIndex = url.indexOf('?');
    if (paramsIndex !== -1) {
        // URL has parameters
        const queryString = url.substring(paramsIndex + 1);
        const params = new URLSearchParams(queryString);

        // Check if 'course' parameter is available
        if (params.has('course')) {
            // Log the parameters
            params.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            // Run the processData function
            await processData();

            // Stop the checking function
            clearInterval(intervalId);
            return;
        }
    }
}

// Call checkURLAndProcessData initially
checkURLAndProcessData();

// Setup interval to check URL every second
const intervalId = setInterval(checkURLAndProcessData, 1000);


