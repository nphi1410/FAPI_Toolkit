
var box1 = document.querySelectorAll('.box')[0];
var box2 = document.querySelectorAll('.box')[1];
var list1 = box1.querySelectorAll('.listBoxWrapper tr');
var list2 = box2.querySelectorAll('.listBoxWrapper tr td tr td');
var registration = list2[1];
var infor = list2[2];
var feedback = list2[3];
var report = list2[4];
var other = list2[5];
var regular = list2[6];
var cousera = list2[7];
var ktx = list2[8];

//Registration
var listRegis = registration.querySelectorAll('ul li a');
var listRegisLink = new Array(listRegis.length);
for(var i = 0; i < listRegis.length; i++) {
  listRegisLink[i] = listRegis[i].getAttribute('href');
}
console.log(listRegisLink);
//Information
var listInfo = infor.querySelectorAll('ul li a');
var listInfoLink = new Array(listInfo.length);
for(var i = 0; i < listInfo.length; i++) {
  listInfoLink[i] = listInfo[i].getAttribute('href');
}
console.log(listInfoLink);
//Report
var listReport = report.querySelectorAll('ul li a');
var listReportLink = new Array(listReport.length);
for(var i = 0; i < listReport.length; i++) {
  listReportLink[i] = listReport[i].getAttribute('href');
}
console.log(listReportLink);

//Consera
var listCousera = cousera.querySelectorAll('ul li a');
var listCouseraLink = new Array(listCousera.length);
for(var i = 0; i < listCousera.length; i++) {
  listCouseraLink[i] = listCousera[i].getAttribute('href');
}
console.log(listCouseraLink);

//Regulation
var listRegular = regular.querySelectorAll('ul li a');
var listRegularLink = new Array(listRegular.length);
for(var i = 0; i < listRegular.length; i++) {
  listRegularLink[i] = listRegular[i].getAttribute('href');
}
console.log(listRegularLink);

//Other
var listOther = other.querySelectorAll('ul li a');
var listOtherLink = new Array(listOther.length);
var listFeedbackLink = feedback.querySelector('ul li a').getAttribute('href');
var listKTXLink = ktx.querySelector('a').getAttribute('href');
var newsLink = box1.querySelector('.listBoxWrapper a').getAttribute('href');
var footer = document.querySelector('#ctl00_divSupport').parentNode.parentNode.nextElementSibling.querySelectorAll('a');
var footerLink = new Array(footer.length);
for(var i = 0; i < footer.length; i++) {
  footerLink[i] = footer[i].getAttribute('href');
}
console.log(footerLink);
for(var i = 0; i < listOther.length; i++) {
  listOtherLink[i] = listOther[i].getAttribute('href');
}
listOtherLink.push(listFeedbackLink, listKTXLink, newsLink, footerLink[2], footerLink[3]);
console.log(listOtherLink);



var head = document.querySelector('head');
head.innerHTML = ` ${head.innerHTML}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
`



var container = document.querySelector('.container');
var all = document.querySelector('body');
console.log(container);
console.log(all);
all.innerHTML = `
  <div class="background"></div>
` + container.outerHTML

//select header, 2 link download
var header = document.querySelector('.row');
var linkDown = header.querySelectorAll('.col-md-4 tr td a'); 
var asLink = linkDown[0].getAttribute('href');
var gpLink = linkDown[1].getAttribute('href');
var asImg = linkDown[0].querySelector('img').getAttribute('src');
var gpImg = linkDown[1].querySelector('img').getAttribute('src');
console.log(asLink);
console.log(gpLink);

//select account and logout link
var account = document.querySelector('#ctl00_divUser a[href="?view=user"]').getAttribute('href');
var logOut = document.querySelector('#ctl00_divUser a[href="?logout=true"]').getAttribute('href');
console.log(account);
console.log(logOut);

// remove breadcumb
var infoAccount = document.querySelector('#ctl00_divUser');
var breadcumb = document.querySelector('.breadcrumb');
infoAccount.style.display = 'none';
breadcumb.style.display = 'none';

var listRegisText = [
  'Suspend to repeat course',
  'Cancel suspend to repeat course',
  'Suspend',
  'Cancel suspend one semester',
  'Move out class',
  'Register extra courses',
  'Register to improve mark',
  'Register to repeat a course',
  'Cancel registration',
  'Register Free Elective Courses',
  'Send Application',
  'View Application',
  'Student Confirmation',
  'Choose paid items',
  'View',
  'Change Classes',
  'Attendance By Code',
  'Wishlist Course',
  'Register Wishlist',
  'Start-up Funding Support',
  'View',
  'Register Over-term',
  'Register Tutoring'
];
var listInfoText = [
  'University TimeTable',
  'Tuition',
  'Weekly Timetable',
  'BLOC Schedules',
  'Exam Schedule',
  'Syllabuses',
  'EduNext',
  'Help',
  'Documents'
];
var listReportText = [
  'Attendance Report',
  'Mark Report',
  'Academic Transript',
  'Curriculum',
  'Student Fee',
  'Transaction History'
];
var listCouseraText = [
  'Announcement',
  'Ask Mentor',
  'View Answer',
  'Submit Certificates',
  'Certificate Submission Guideline'
];
var listRegularText = [
  'Regulations',
  'Dormitory Regulations(Ha Noi)',
  'Dormitory Regulations(CanTho)'
];
var listOtherText = [
  'Student Profile',
  'Update Profile',
  'Semester',
  'Room',
  'FUNIX',
  'Types of Certificates',
  'Movement Mark',
  'Wiley eBook',
  'Feedback Teacher',
  'Campus Dormitory',
  'News',
  'Library',
  'Book24/7'
];
var searchRegisHTML = ``;
var searchInfoHTML = ``;
var searchReportHTML = ``;
var searchCouseraHTML = ``;
var searchRegularHTML = ``;
var searchOtherHTML = ``;
for(var i=0;i<listInfoText.length;i++){
  searchInfoHTML += `<li class='header-search-bar_item'><a href="${listInfoLink[i]}">${listInfoText[i]}</a></li>`
}
for(var i=0;i<listRegisText.length;i++){
  searchRegisHTML += `<li class='header-search-bar_item'><a href="${listRegisLink[i]}">${listRegisText[i]}</a></li>`
}
for(var i=0;i<listReportText.length;i++){
  searchReportHTML += `<li class='header-search-bar_item'><a href="${listReportLink[i]}">${listReportText[i]}</a></li>`
}
for(var i=0;i<listCouseraText.length;i++){
  searchCouseraHTML += `<li class='header-search-bar_item'><a href="${listCouseraLink[i]}">${listCouseraText[i]}</a></li>`
}
for(var i=0;i<listRegularText.length;i++){
  searchRegularHTML += `<li class='header-search-bar_item'><a href="${listRegularLink[i]}">${listRegularText[i]}</a></li>`
}
for(var i=0;i<listOtherText.length;i++){
  searchOtherHTML += `<li class='header-search-bar_item'><a href="${listOtherLink[i]}">${listOtherText[i]}</a></li>`
}


header.setAttribute('class', `${header.getAttribute('class')} header sticky-top`);
header.innerHTML = `
  <div class='header-name_logo'>
    <div class='header-logo'>
      <img src="https://i.ibb.co/dLMy0d8/logo.png" alt="logo" border="0">
      <div class='header-logo_separator'></div>
    </div>
    <div class='header-name'>FPT University Academic Portal</div>
  </div>

  <div class='header-search'>
    <form role='search' class='header-searchbar'>
      <div class='header-search-bar_main'>
        <input class='header-search-bar_input' placeholder='Search'>
      </div>
      <button class='header-search-btn'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <div class='header-search-bar_dropdown'>
        <ul class='header-search-bar_list'>
          ${searchRegisHTML}
          ${searchInfoHTML}
          ${searchReportHTML}
          ${searchCouseraHTML}
          ${searchRegularHTML}
          ${searchOtherHTML}
        </ul>
      </div>
    </form>
  </div>

  <div class="dropdown">
  <button class="dropbtn">Language</button>
  <div class="dropdown-content">
    <a href="#" style="text-align: right">
      <img src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-anh.jpg" alt="English" title="English">English
    </a>
    <a href="#" style="text-align: right">
      <img src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-viet-nam.jpg" alt="Vietnamese" title="Tiếng Việt">Tiếng Việt
    </a>
  </div>
</div>

<div>
  <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="checkbox-label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <span class="ball"></span>
  </label>
</div>

  <div class='header-account-settings'>

    <div class='header-settings'>
      <i class="fa-solid fa-gear"></i>
      <div class='header-menu header-settings-menu'>
        <h1 class='header-menu-heading'>Settings</h1>
        <ul class='header-menu-list'>
          <li class='header-menu-item'>
            <span>Language</span>
            <label class="switch">
              <input type="checkbox">
              <span class="slider"></span>
            </label>
          </li>
          <li class='header-menu-item'><span>Dark Mode</span></li>
          <li class='header-menu-item download'>
            <span>Download</span>
            <div class='header-settings-item-dropdown'>
              <a href="${asLink}" target="_blank"><img src="${asImg}" alt="as" border="0"></a>
              <a href="${gpLink}" target="_blank"><img src="${gpImg}" alt="as" border="0"></a>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div class='header-account'>
      <div class='header-account-bg'></div>
      <div class='header-menu header-account-menu'>
        <h1 class='header-menu-heading'>Account</h1>
        <ul class='header-menu-list'>
          <li class='header-menu-item'><a href="${account}">Account</a></li>
          <li class='header-menu-item'><a href="${logOut}">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
`

var setting = document.querySelector('.header-settings');
var settingMenu = setting.querySelector('.header-settings-menu');
setting.onclick = () => {
  if(settingMenu.classList.contains('open')){
    settingMenu.classList.remove('open');
  }else settingMenu.classList.add('open');
}

var account = document.querySelector('.header-account');
var accountMenu = account.querySelector('.header-account-menu');
account.onclick = () => {
  if(accountMenu.classList.contains('open')){
    accountMenu.classList.remove('open');
  }else accountMenu.classList.add('open');
}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

// body
// select body



var procedures = [
  'Changing major',
  'Changing campus',
  'Rejoin',
  'Suspect one semester',
  'Suspect one semester to take repeat course',
  'Suspend subject',
  'Register to repeat a course',
  'Move out class', 
  'Request a drop out',
  'Retake to improve mark',
  'Re – Examination',
  'Free of attendance',
  'Pay specialized tuition',
  'Pay preparetation English',
  'Register for final exam for subjects online'
];
var deadline = [
  '4 weeks before the new',
  '10 days before the new semester',
  '1 week before the new semester',
  '12 hours before the final exam resit',
  '4 days after the  examination result public',
  'before starting the new semester',
  '5 working days before the new semester',
  '3 working days before the new course',
  '12 a.m - Friday of the ninth week of the semester'
];



var body = document.querySelectorAll('.row')[1];
var contentBody = body.querySelector('.col-md-12');
console.log(contentBody);
console.log(body);

body.innerHTML = `
  <div class='navbar'>
    <ul class='navbar-list'>
      <li class='navbar-item'>
        Registration
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70' data-i18n="suspend">
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
              <a href="${listOtherLink[4]}">FUNix</a>
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
            <table style="width:100%">
              <tr>
                <th>Deadline</th>
              </tr>
              <tr>
                <td>Type of procedure</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </table>
          </div>
        </div>
      </li>
    </ul>
  </div>
` + contentBody.outerHTML
