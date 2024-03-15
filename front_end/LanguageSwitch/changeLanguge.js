document.addEventListener('DOMContentLoaded', function () {
  const languageButtons = document.querySelectorAll('.language-btn');
  languageButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const language = this.getAttribute('data-lang');
          changeLanguage(language);
      });
  });

  changeLanguage('english');
});

const englishContent = `
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
`;

const vietnameseContent =
  `
  <div class='navbar'>
    <ul class='navbar-list'>
      <li class='navbar-item'>
        Thủ tục
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[0]}">Xin tạm hoãn tiến độ một học kỳ để học lại</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[1]}" >Hủy bỏ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[2]}">Xin tạm nghỉ một học kỳ</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[3]}">Hủy bỏ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[4]}">Xin chuyển lớp</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[5]}">Đăng ký học đi chậm kỳ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[6]}">Đăng ký học cải thiện điểm</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[7]}">Đăng ký học lại</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[8]}">Hủy đăng ký học</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[9]}">Đăng ký môn tự chọn</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[10]}">Gửi đơn</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[11]}">Xem đơn</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[12]}">Xin xác nhận sinh viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[13]}">Lựa chọn các khoản nộp</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[14]}">Xem lịch sử nộp</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[15]}">Yêu cầu đổi chéo lớp với sinh viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[16]}">Điểm danh bằng mã được cấp</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[17]}">Danh sách môn chờ xếp lớp</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[18]}">Đăng ký Wishlist</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[19]}">Đề nghị hỗ trợ kinh phí khởi nghiệp</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[20]}">Đơn khởi nghiệp</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[21]}">Đăng ký học vượt kỳ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[22]}">Đăng ký học phụ đạo</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Thông tin
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[0]}">Xem danh sách lớp và giảng viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[1]}">Biểu học phí</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[2]}">Thời khóa biểu theo tuần</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[3]}">Lịch học các môn theo phương pháp BLOC trong kỳ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[4]}">Xem lịch thi</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[5]}">Xem đề cương môn học</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[6]}">Hướng dẫn sử dụng EduNext</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[7]}">Hỗ trợ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[8]}">Tài liệu hướng dẫn: Định hướng cho sinh viên</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Báo cáo
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[0]}">Báo cáo điểm danh</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[1]}">Báo cáo điểm các môn trong kỳ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[2]}">Báo cáo điểm chuyên ngành</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[3]}">Khung chương trình</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[4]}">Tra cứu học phi đã nộp</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[5]}">Xem lịch sử nộp học phí</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Coursera
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[0]}">Thông Báo</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[1]}">Tạo câu hỏi cho giảng viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[2]}">Xem phản hồi của giảng viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[3]}">Nộp chứng chỉ Coursera</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[4]}">Hướng dẫn nộp chứng chỉ Coursera</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Quy định
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegularLink[0]}">Tổng hợp các nội quy, quy định của trường</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[1]}">Nội quy ký túc xá (Dành cho cơ sở Hà Nội)</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[2]}">Nội quy ký túc xá (Dành cho cơ sở Cần Thơ)</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Khác
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[0]}">Hồ sơ sinh viên</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[1]}">Cập nhật hồ sơ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[2]}">Lịch bắt đầu/kết thúc của một kỳ</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[3]}">Danh sách phòng học</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[4]}">FUNiX</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[5]}">Các loại chứng chỉ</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[6]}">Xuất báo cáo sinh viên cuối khóa</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[7]}">Hướng dẫn truy cập Sách điện tử Wiley trên nền tảng VitalSource</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[8]}">Danh sách phản hồi giảng viên</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[9]}" target="_blank">Trang web ký túc xá của trường</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[10]}" target="_blank">Tin tức</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[11]}" target="_blank">Trang web thư viện của trường</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[12]}" target="_blank">Trang web Book24/7</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        Thông báo
        <div class='subnav-list full'>
          <div class='subnav-list_table'>
            ${table.outerHTML}
          </div>
        </div>
      </li>
    </ul>
  </div>
` + contentBody.outerHTML;

function changeLanguage(language) {
  const headerLanguageContent = document.querySelector('.header-language-content');
  if (language === 'english') {
      headerLanguageContent.innerHTML = englishContent;
  } else if (language === 'vietnamese') {
      headerLanguageContent.innerHTML = vietnameseContent;
  }
}

