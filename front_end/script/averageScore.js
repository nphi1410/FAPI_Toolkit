// b1 get values from html page
// b2 save it to particular variables
//b3 do smt with data

// var sum += aTags[i].innerText;

var divGrade = document.getElementById("ctl00_mainContent_divGrade");
var tdTags = divGrade.getElementsByTagName("td");
var grades = [];

for (var i = 0; i < tdTags.length; i++) {
  var currentInnerText = tdTags[i].innerText.trim();
  // Check if the innerText contains "%"
  if (currentInnerText.includes("%")) {
    grades.push(currentInnerText);
    // Make sure to avoid accessing an index that is out of bounds
    if (i + 1 < tdTags.length) {
      grades.push(tdTags[i + 1].innerText.trim());
    }
  }
}

console.log("grades: ", grades);
