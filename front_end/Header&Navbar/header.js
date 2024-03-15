
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


var head = document.querySelector("head");
head.innerHTML = ` ${head.innerHTML}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
`;

var header = document.querySelector(".row");
header.setAttribute(
    "class",
    `${header.getAttribute("class")} header sticky-top`
  );

header.innerHTML = `
  <div class='header-name_logo'>
    <div class='header-logo'>
      <a href="https://fap.fpt.edu.vn/Student.aspx">
        <img src="https://i.ibb.co/dLMy0d8/logo.png" alt="logo" border="0">
      </a>
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

<div class="header-language">
  <div class="header-language-btn">
    Language
    <div class="header-language-content">
      <a href="#" style="text-align: right">
        <img src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-anh.jpg" alt="English" title="English">
        <span>English</span>
      </a>
      <a href="#" style="text-align: right">
        <img src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-viet-nam.jpg" alt="Vietnamese" title="Tiếng Việt">
        <span>Tiếng Việt</span>
      </a>
    </div>
  </div>
</div>

<div class='header-darkmode'>
  <input type="checkbox" class="header-darkmode-checkbox" id="header-darkmode-checkbox">
  <label for="header-darkmode-checkbox" class="header-darkmode-checkbox-label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <span class="header-darkmode-ball"></span>
  </label>
</div>

  <div class='header-account-settings'>

    <div class='header-account'>
      <div class='header-account-bg'></div>
      <div class='header-menu header-account-menu'>
        <div class='header-menu-heading'>
          <div class='header-menu-heading-name'>Đường Minh Sơn</div>
          <div class='header-menu-heading-mail'>sondmhe186291</div>
        </div>
        <ul class='header-menu-list'>
          <li class='header-menu-item'><a href="?view=user">Account</a></li>
          <li class='header-menu-item'><a href="?logout=true">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
`;


