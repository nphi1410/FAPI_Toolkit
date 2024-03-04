

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
for(var i = 0; i < listOther.length; i++) {
  listOtherLink[i] = listOther[i].getAttribute('href');
}
console.log(listOtherLink);

//Feedback
var listFeedbackLink = feedback.querySelector('ul li a').getAttribute('href');
console.log(listFeedbackLink);

//ktx
var listKTXLink = ktx.querySelector('a').getAttribute('href');
console.log(listKTXLink);


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
    </form>
  </div>

  <div class='header-account-settings'>

    <div class='header-settings'>
      <i class="fa-solid fa-gear"></i>
      <div class='header-menu header-settings-menu'>
        <h1 class='header-menu-heading'>Settings</h1>
        <ul class='header-menu-list'>
          <li class='header-menu-item'><span>Language</span></li>
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


// body
// select body



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
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[0]}">Suspend to repeat course</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[1]}">Cancel</a>
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
              <a href="${listFeedbackLink}">Feedback Teacher</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listKTXLink}" target="_blank">Campus Dormitory</a>
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
` + contentBody.outerHTML
