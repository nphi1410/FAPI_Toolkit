// b1 get values from html page
// b2 save it to particular variables
//b3 do smt with data

// var sum += aTags[i].innerText;

var divGrade = document.getElementById("ctl00_mainContent_divGrade");
var tdTags = divGrade.getElementsByTagName("td");
var grades = [];

var avg = 0;

for (var i = 0; i < tdTags.length; i++) {
  var currentInnerText = tdTags[i].innerText.trim();
  var previousInnerText = (i > 0) ? tdTags[i - 1].innerText.trim() : "";

  if (currentInnerText.includes("%") && previousInnerText !== "Total") {
    var percent = parseFloat(currentInnerText); // Parse the percent value
    var mark = parseFloat(tdTags[i + 1].innerText.trim()); // Parse the mark value

    if (!isNaN(mark) && mark !== null) {
      grades.push({
        percent: percent,
        mark: mark
      });

      avg += (percent / 100) * mark; // Add to the sum for average calculation

    } 
  }
}

var nextTd = null;

// Loop through the td tags
for (var i = 0; i < tdTags.length; i++) {
  var currentInnerText = tdTags[i].innerText.trim();

  // Check if current td tag contains "AVERAGE"
  if (currentInnerText === "AVERAGE" && i + 1 < tdTags.length) {
    // Get the next td tag
    tdTags[i + 1].innerHTML = avg.toFixed(1);
    break; // Exit the loop once found
  }
}

console.log("grades: ", grades);
console.log("average score: ", avg.toFixed(1));

