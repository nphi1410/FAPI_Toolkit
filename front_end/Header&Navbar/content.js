console.log("content");

var table = localStorage.getItem("tableNotice");
console.log(table);


// ADD BACKGROUND
var container = document.querySelector(".container");
var all = document.querySelector("body");
document.querySelector("body").onload = () => {
  console.log("loading")
}
all.innerHTML =
  `
  <div class="background"></div>
` + container.outerHTML;



// remove breadcumb
var infoAccount = document.querySelector("#ctl00_divUser");
var breadcumb = document.querySelector(".breadcrumb");
infoAccount.style.display = "none";
breadcumb.style.display = "none";



// body
var body = document.querySelectorAll(".row")[1];
var contentBody = body.querySelector(".col-md-12");
console.log(contentBody);
console.log(body);

//select account and logout link
var account = document.querySelector('#ctl00_divUser a[href="?view=user"]').getAttribute("href");
var logOut = document.querySelector('#ctl00_divUser a[href="?logout=true"]').getAttribute("href");

body.innerHTML = `
  <div class='navbar'>
    <ul class='navbar-list'>
      <li class='navbar-item'>
        Registration
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[0]}">Suspend to repeat course</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[1]}" >Cancel</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[2]}">Suspend</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[3]}">Cancel</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[4]}">Move out class</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[5]}">Register extra courses</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[6]}">Register to improve mark</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[7]}">Register to repeat a course</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[8]}">Cancel registration</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[9]}">Register Free Elective Courses</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[10]}">Send Application</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[11]}">View Application</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[12]}">Student Confirmation</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[13]}">Choose paid items</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[14]}">View</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[15]}">Change Classes</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[16]}">Attendance By Code</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[17]}">Wishlist Course</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[18]}">Register Wishlist</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[19]}">Start-up Funding Support</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[20]}">View</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[21]}">Register Over-term</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[22]}">Register Tutoring</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Information
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[0]}">University Timetable</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[1]}">Tuition</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[2]}">Weekly Timetable</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[3]}">BLOC Schedules</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[4]}">Exam Schedule</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[5]}">Syllabuses</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[6]}">EduNext</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[7]}">Help</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[8]}">Documents</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Reports
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[0]}">Attendance Report</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[1]}">Mark Report</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[2]}">Academic Transript</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[3]}">Curriculum</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[4]}">Student Fee</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[5]}">Transaction History</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Coursera
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[0]}">Announcement</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[1]}">Ask Mentor</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[2]}">View Answer</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[3]}">Submit Certificates</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[4]}">Certificate Submission Guideline</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Regulations
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegularLink[0]}">Regulations...</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[1]}">Dormitory Regulations(Ha Noi)</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[2]}">Dormitory Regulations(Can Tho)</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Others
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[0]}">Student Profile</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[1]}">Update Profile</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[2]}">Semester</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[3]}">Room</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[4]}">FUNiX</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[5]}">Types of Certificates</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[6]}">Movement Mark</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[7]}">Wiley eBook</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[8]}">Feedback Teacher</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[9]}" target="_blank">Campus Dormitory</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[10]}" target="_blank">News</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[11]}" target="_blank">Library</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[12]}" target="_blank">Book24/7</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Notices
        <div class='subnav-list full'>
          <div class='subnav-list_table'>
            ${table}
          </div>
        </div>
      </li>
    </ul>
  </div>
`
+contentBody.outerHTML;
