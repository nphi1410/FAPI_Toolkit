var NoticeTable = localStorage.getItem("tableNotice");


// ADD BACKGROUND
var container = document.querySelector(".container");
var all = document.querySelector("body");
document.querySelector("body").onload = () => {
  console.log("loading");
};
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


//CHANGE LANGUAGE
const enBtn = document.querySelector('a[data-lang="english"]');
const viBtn = document.querySelector('a[data-lang="vietnamese"]');
enBtn.addEventListener("click", () => {
  localStorage.setItem("lang", "en");
  languageChange();
  location.reload();
});
viBtn.addEventListener("click", () => {
  localStorage.setItem("lang", "vi");
  languageChange();
  location.reload();
});


body.innerHTML =
  `
  <div class='navbar'>
    <ul class='navbar-list'>
      <li class='navbar-item'>
        ${itemNavText[0]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[0]}">${listRegisText[0]}</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[1]}">${listRegisText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[2]}">${listRegisText[2]}</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[3]}">${listRegisText[3]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[4]}">${listRegisText[4]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[5]}">${listRegisText[5]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[6]}">${listRegisText[6]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[7]}">${listRegisText[7]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[8]}">${listRegisText[8]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[9]}">${listRegisText[9]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[10]}">${listRegisText[10]}</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[11]}">${listRegisText[11]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[12]}">${listRegisText[12]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[13]}">${listRegisText[13]}</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[14]}">${listRegisText[14]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[15]}">${listRegisText[15]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[16]}">${listRegisText[16]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listRegisLink[17]}">${listRegisText[17]}</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listRegisLink[18]}">${listRegisText[18]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-70'>
              <a href="${listRegisLink[19]}">${listRegisText[19]}</a>
            </button>
            <button class='subnav-item_btn end percent-30'>
              <a href="${listRegisLink[20]}">${listRegisText[20]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[21]}">${listRegisText[21]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegisLink[22]}">${listRegisText[22]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[1]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[0]}">${listInfoText[0]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[1]}">${listInfoText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[2]}">${listInfoText[2]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[3]}">${listInfoText[3]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[4]}">${listInfoText[4]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[5]}">${listInfoText[5]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[6]}">${listInfoText[6]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[7]}">${listInfoText[7]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listInfoLink[8]}">${listInfoText[8]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[2]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[0]}">${listReportText[0]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[1]}">${listReportText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[2]}">${listReportText[2]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[3]}">${listReportText[3]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[4]}">${listReportText[4]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listReportLink[5]}">${listReportText[5]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[3]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[0]}">${listCouseraText[0]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[1]}">${listCouseraText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[2]}">${listCouseraText[2]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[3]}">${listCouseraText[3]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listCouseraLink[4]}">${listCouseraText[4]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[4]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegularLink[0]}">${listRegularText[0]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegularLink[1]}">${listRegularText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listRegularLink[2]}">${listRegularText[2]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[5]}
        <ul class='subnav-list'>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[0]}">${listOtherText[0]}</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[1]}">${listOtherText[1]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn front percent-50'>
              <a href="${listOtherLink[2]}">${listOtherText[2]}</a>
            </button>
            <button class='subnav-item_btn end percent-50'>
              <a href="${listOtherLink[3]}">${listOtherText[3]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[4]}">${listOtherText[4]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[5]}">${listOtherText[5]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[6]}">${listOtherText[6]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[7]}">${listOtherText[7]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[8]}">${listOtherText[8]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[9]}" target="_blank">${listOtherText[9]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[10]}" target="_blank">${listOtherText[10]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[11]}" target="_blank">${listOtherText[11]}</a>
            </button>
          </li>
          <li class='subnav-item'>
            <button class='subnav-item_btn'>
              <a href="${listOtherLink[12]}" target="_blank">${listOtherText[12]}</a>
            </button>
          </li>
        </ul>
      </li>
      <li class='navbar-item'>
        ${itemNavText[6]}
        <div class='subnav-list full'>
          <div class='subnav-list_table'>
            ${NoticeTable}
          </div>
        </div>
      </li>
    </ul>
  </div>
` + contentBody.outerHTML;
