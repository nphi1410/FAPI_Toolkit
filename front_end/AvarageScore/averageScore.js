// b1 get values from html page
// b2 save it to particular variables
//b3 do smt with data

// var sum += aTags[i].innerText;

const divGrade = document.getElementById("ctl00_mainContent_divGrade");
const tdTags = divGrade.getElementsByTagName("td");
let grades = [];

let avg = 0;

for (let i = 0; i < tdTags.length; i++) {
  // Get the inner text of the current <td> tag and remove leading/trailing whitespace
  const currentInnerText = tdTags[i].innerText.trim();
  // Get the inner text of the previous <td> tag if it exists, otherwise initialize it to an empty string
  const previousInnerText = (i > 0) ? tdTags[i - 1].innerText.trim() : "";

  // Check if the current <td> tag contains "%" and the previous inner text is not "Total"
  if (currentInnerText.includes("%") && previousInnerText !== "Total") {
    // Parse the percent value from the current inner text
    const percent = parseFloat(currentInnerText);
    // Parse the mark value from the next <td> tag's inner text
    let mark = parseFloat(tdTags[i + 1].innerText.trim());

    // Check if mark is a valid number and is null
    if (isNaN(mark)) {
      // If mark is null, push an object with mark set to 0 into the grades array
      mark = 0;
      grades.push({
        percent: percent,
        mark: mark
      });
    } else {
      // Otherwise, push an object with actual mark value into the grades array
      grades.push({
        percent: percent,
        mark: mark
      });
    }

    // Add to the sum for average calculation (weighted contribution of percent and mark)
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

while(recAvg < 4){
  for (let i = 0; i < nullPoints.length - 1; i++) {
    let point = nullPoints[i]; // Get the current point
  
    if (point.mark == 0) {
      if (point.percent >= 30) point.mark += 4;
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

// function pointsNeededForPassing(averageScores) {
//   // Calculate the sum of average scores
//   const totalScore = averageScores.reduce((acc, score) => acc + score, 0);
  
//   // Calculate the number of points needed for passing
//   const pointsNeeded = Math.max(0, 4 * (averageScores.length + 1) - totalScore);
  
//   return pointsNeeded;
// }


