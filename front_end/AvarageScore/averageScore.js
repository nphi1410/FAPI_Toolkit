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
    const percent = parseFloat(currentInnerText); // Parse the percent value
    const mark = parseFloat(tdTags[i + 1].innerText.trim()); // Parse the mark value

    if (!isNaN(mark) && mark !== null) {
      grades.push({
        percent: percent,
        mark: mark
      });

      avg += (percent / 100) * mark; // Add to the sum for average calculation

    } 
  }
}


// Loop through the td tags
for (let i = 0; i < tdTags.length; i++) {
  const currentInnerText = tdTags[i].innerText.trim();

  // Check if current td tag contains "AVERAGE"
  if (currentInnerText === "AVERAGE" && i + 1 < tdTags.length) {
    // Get the next td tag
    tdTags[i + 1].innerHTML = avg.toFixed(1);
    break; // Exit the loop once found
  }
}


