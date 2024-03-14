var box1 = document.querySelectorAll(".box")[0];
var box2 = document.querySelectorAll(".box")[1];
var list1 = box1.querySelectorAll(".listBoxWrapper tr");
var list2 = box2.querySelectorAll(".listBoxWrapper tr td tr td");
var table = document.querySelector(".table-bordered");
var registration = list2[1];
var infor = list2[2];
var feedback = list2[3];
var report = list2[4];
var other = list2[5];
var regular = list2[6];
var cousera = list2[7];
var ktx = list2[8];


// ADD BACKGROUND
var container = document.querySelector(".container");
var all = document.querySelector("body");
console.log(container);
console.log(all);
all.innerHTML =
  `
  <div class="background"></div>
` + container.outerHTML;

//select header, 2 link download
var header = document.querySelector(".row");
var linkDown = header.querySelectorAll(".col-md-4 tr td a");
var asLink = linkDown[0].getAttribute("href");
var gpLink = linkDown[1].getAttribute("href");
var asImg = linkDown[0].querySelector("img").getAttribute("src");
var gpImg = linkDown[1].querySelector("img").getAttribute("src");
console.log(asLink);
console.log(gpLink);

//select account and logout link
var account = document
  .querySelector('#ctl00_divUser a[href="?view=user"]')
  .getAttribute("href");
var logOut = document
  .querySelector('#ctl00_divUser a[href="?logout=true"]')
  .getAttribute("href");
console.log(account);
console.log(logOut);

// remove breadcumb
var infoAccount = document.querySelector("#ctl00_divUser");
var breadcumb = document.querySelector(".breadcrumb");
infoAccount.style.display = "none";
breadcumb.style.display = "none";

var listRegisText = [
  "Suspend to repeat course",
  "Cancel suspend to repeat course",
  "Suspend",
  "Cancel suspend one semester",
  "Move out class",
  "Register extra courses",
  "Register to improve mark",
  "Register to repeat a course",
  "Cancel registration",
  "Register Free Elective Courses",
  "Send Application",
  "View Application",
  "Student Confirmation",
  "Choose paid items",
  "View",
  "Change Classes",
  "Attendance By Code",
  "Wishlist Course",
  "Register Wishlist",
  "Start-up Funding Support",
  "View",
  "Register Over-term",
  "Register Tutoring",
];
// Vietnamese (FINISHED)
var listRegisTextVI = [
  "Xin tạm hoãn tiến độ một học kỳ để học lại",
  "Hủy bỏ",
  "Xin tạm nghỉ một học kỳ",
  "Hủy bỏ",
  "Xin chuyển lớp",
  "Đăng ký học đi chậm kỳ",
  "Đăng ký học cải thiện điểm",
  "Đăng ký học lại",
  "Hủy đăng ký học",
  "Đăng ký môn tự chọn",
  "Gửi đơn",
  "Xem đơn",
  "Xin xác nhận sinh viên",
  "Lựa chộn các khoản nộp",
  "Xem lịch sử nộp",
  "Yêu cầu đổi chéo lớp với sinh viên",
  "Điểm danh bằng mã được cấp",
  "Danh sách môn chờ xếp lớp",
  "Đăng ký Wishlist",
  "Đề ngị hỗ trợ kinh phí khởi nghiệp",
  "Đơn khởi nghiệp",
  "Đăng ký học vượt kỳ",
  "Đăng ký học phụ đạo",
];

var listInfoText = [
  "University TimeTable",
  "Tuition",
  "Weekly Timetable",
  "BLOC Schedules",
  "Exam Schedule",
  "Syllabuses",
  "EduNext",
  "Help",
  "Documents",
];

var listInfoTextVI = [
  "Xem danh sách lớp và giảng viên",
  "Biểu học phí",
  "Thời khóa biểu theo tuần",
  "Lịch học các môn theo phương pháp BLOC trong kỳ",
  "Xem lịch thi",
  "Xem đề cương môn học",
  "Hướng dẫ sử dụng EduNext",
  "Hỗ trợ",
  "Tài liệu hướng dẫn: Định hướng cho sinh viên",
];

var listReportText = [
  "Attendance Report",
  "Mark Report",
  "Academic Transript",
  "Curriculum",
  "Student Fee",
  "Transaction History",
];

var listReportTextVI = [
  "Báo cáo điểm danh",
  "Báo cáo điểm các môn trong kỳ",
  "Báo cáo điểm chuyên ngành",
  "Khung chương trình",
  "Tra cứu học phí đã nộp",
  "Xem lịch sử nộp học phí",
];

var listCouseraText = [
  "Announcement",
  "Ask Mentor",
  "View Answer",
  "Submit Certificates",
  "Certificate Submission Guideline",
];

var listCouseraTextVI = [
  "Thông báo",
  "Tạo câu hỏi cho giảng viên",
  "Xem phản hồi của giảng viên",
  "Nộp chứng chỉ Coursera",
  "Hướng dẫn nộp chứng chỉ Coursera",
];

var listRegularText = [
  "Regulations",
  "Dormitory Regulations(Ha Noi)",
  "Dormitory Regulations(CanTho)",
];

var listRegularTextVI = [
  "Tổng hợp các nội quy, quy định của trường",
  "Nội quy ký túc xá (Dành cho cơ sở Hà Nội)",
  "Nội quy ký túc xá (Dành cho cơ sở Cần Thơ)",
];

var listOtherText = [
  "Student Profile",
  "Update Profile",
  "Semester",
  "Room",
  "FUNiX",
  "Types of Certificates",
  "Movement Mark",
  "Wiley eBook",
  "Feedback Teacher",
  "Campus Dormitory",
  "News",
  "Library",
  "Book24/7",
];

var listOtherTextVI = [
  "Hồ sơ sinh viên",
  "Cập nhật hồ sơ",
  "Lịch bắt đầu/kết thúc của một kỳ",
  "Danh sách phòng học",
  "FUNiX",
  "Các loại chứng chỉ",
  "Xuất báo cáo sinh viên cuối kỳ",
  "Hướng dẫn truy cập sách điện tử Wiley trên nền tảng VitaiSource",
  "Danh sách phản hồi giảng viên",
  "Trang web ký túc xá của trường",
  "Tin tức",
  "Trang web thư viện của trường",
  "Trang web Book24/7",
];

var searchRegisHTML = ``;
var searchInfoHTML = ``;
var searchReportHTML = ``;
var searchCouseraHTML = ``;
var searchRegularHTML = ``;
var searchOtherHTML = ``;
for (var i = 0; i < listInfoText.length; i++) {
  searchInfoHTML += `<li class='header-search-bar_item'><a href="${listInfoLink[i]}">${listInfoText[i]}</a></li>`;
}

for (var i = 0; i < listInfoTextVI.length; i++) {
  searchInfoHTML += `<li class='header-search-bar_item'><a href="${listInfoLink[i]}">${listInfoTextVI[i]}</a></li>`;
}
for (var i = 0; i < listRegisText.length; i++) {
  searchRegisHTML += `<li class='header-search-bar_item'><a href="${listRegisLink[i]}">${listRegisText[i]}</a></li>`;
}
for (var i = 0; i < listRegisTextVI.length; i++) {
  searchRegisHTML += `<li class='header-search-bar_item'><a href="${listRegisLink[i]}">${listRegisTextVI[i]}</a></li>`;
}
for (var i = 0; i < listReportText.length; i++) {
  searchReportHTML += `<li class='header-search-bar_item'><a href="${listReportLink[i]}">${listReportText[i]}</a></li>`;
}

for (var i = 0; i < listReportTextVI.length; i++) {
  searchReportHTML += `<li class='header-search-bar_item'><a href="${listReportLink[i]}">${listReportTextVI[i]}</a></li>`;
}

for (var i = 0; i < listCouseraText.length; i++) {
  searchCouseraHTML += `<li class='header-search-bar_item'><a href="${listCouseraLink[i]}">${listCouseraText[i]}</a></li>`;
}

for (var i = 0; i < listCouseraTextVI.length; i++) {
  searchCouseraHTML += `<li class='header-search-bar_item'><a href="${listCouseraLink[i]}">${listCouseraTextVI[i]}</a></li>`;
}

for (var i = 0; i < listRegularText.length; i++) {
  searchRegularHTML += `<li class='header-search-bar_item'><a href="${listRegularLink[i]}">${listRegularText[i]}</a></li>`;
}

for (var i = 0; i < listRegularTextVI.length; i++) {
  searchRegularHTML += `<li class='header-search-bar_item'><a href="${listRegularLink[i]}">${listRegularTextVI[i]}</a></li>`;
}

for (var i = 0; i < listOtherText.length; i++) {
  searchOtherHTML += `<li class='header-search-bar_item'><a href="${listOtherLink[i]}">${listOtherText[i]}</a></li>`;
}

for (var i = 0; i < listOtherTextVI.length; i++) {
  searchOtherHTML += `<li class='header-search-bar_item'><a href="${listOtherLink[i]}">${listOtherTextVI[i]}</a></li>`;
}



// body
// select body

var procedures = [
  "Changing major",
  "Changing campus",
  "Rejoin",
  "Suspect one semester",
  "Suspect one semester to take repeat course",
  "Suspend subject",
  "Register to repeat a course",
  "Move out class",
  "Request a drop out",
  "Retake to improve mark",
  "Re – Examination",
  "Free of attendance",
  "Pay specialized tuition",
  "Pay preparetation English",
  "Register for final exam for subjects online",
];
var deadline = [
  "4 weeks before the new",
  "10 days before the new semester",
  "1 week before the new semester",
  "12 hours before the final exam resit",
  "4 days after the  examination result public",
  "before starting the new semester",
  "5 working days before the new semester",
  "3 working days before the new course",
  "12 a.m - Friday of the ninth week of the semester",
];

var body = document.querySelectorAll(".row")[1];
var contentBody = body.querySelector(".col-md-12");
console.log(contentBody);
console.log(body);
//Remove Body
var fullBody = document.querySelector('.container .row .col-md-12');
fullBody.style.display = 'none';

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
            ${table.outerHTML}
          </div>
        </div>
      </li>
    </ul>
  </div>
`
+contentBody.outerHTML;
