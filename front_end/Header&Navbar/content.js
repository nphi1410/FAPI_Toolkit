// var link = document.createElement('link');
// link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/base.min.css';
// link.type = 'text/css';
// link.rel = 'stylesheet';

// Append the link element to the head of the document
// document.body.appendChild(link);

// add script cdn tailwind
// var script = document.createElement('script');
// script.src = 'https://cdn.tailwindcss.com/3.4.1/tailwind.min.js';
// document.body.appendChild(script);

// remove all bootstrap link css
var allLink = document.querySelectorAll("link");
for (var i = 0; i < allLink.length; i++) {
  if (allLink[i].href.includes("bootstrap")) {
    allLink[i].remove();
  }
}

//HIDDEN HEADER 
var header = document.querySelector(".row");
header.setAttribute(
  "class",
  `${header.getAttribute("class")} hidden`
);

//ADD font-awesome css
document.querySelector("head").innerHTML = ` ${document.querySelector("head").innerHTML}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
`;

// ADD BACKGROUND
var container = document.querySelector(".container");
var all = document.querySelector("body");
container.outerHTML =
  `
  <div class="background"></div>
  <div class='loader-bg'>
    <div class='loader'>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--dot'></div>
      <div class='loader--text'></div>
    </div>
  </div>

` + container.outerHTML;
document.querySelector(".container").classList.add("close")
  setTimeout(function() {
    document.querySelector(".loader-bg").classList.add("close");
    document.querySelector(".container").classList.remove("close");
  }, 1000);


// remove breadcumb
var infoAccount = document.querySelector("#ctl00_divUser");
var breadcumb = document.querySelector(".breadcrumb");
infoAccount.style.display = "none";
breadcumb.style.display = "none";

// body
var body = document.querySelectorAll(".row")[1];
var contentBody = body.querySelector(".col-md-12");

var row = document.querySelectorAll(".row")[0];



var searchRegisHTML = ``;
var searchInfoHTML = ``;
var searchReportHTML = ``;
var searchCouseraHTML = ``;
var searchRegularHTML = ``;
var searchOtherHTML = ``;

for (var i = 0; i < listInfoText.length; i++) {
  searchInfoHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listInfoLink[i]}">${listInfoText[i]}</a>
    </li>`;
}
for (var i = 0; i < listRegisText.length; i++) {
  searchRegisHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listRegisLink[i]}">${listRegisText[i]}</a>
    </li>`;
}
for (var i = 0; i < listReportText.length; i++) {
  searchReportHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listReportLink[i]}">${listReportText[i]}</a>
    </li>`;
}
for (var i = 0; i < listCouseraText.length; i++) {
  searchCouseraHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listCouseraLink[i]}">${listCouseraText[i]}</a>
    </li>`;
}
for (var i = 0; i < listRegularText.length; i++) {
  searchRegularHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listRegularLink[i]}">${listRegularText[i]}</a>
    </li>`;
}
for (var i = 0; i < listOtherTextVI.length; i++) {
  searchOtherHTML += `<li class="hidden">
      <a class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" href="${listOtherLink[i]}">${listOtherText[i]}</a>
    </li>`;
}

contentBody.outerHTML = `
<nav class="bg-white border-gray-200 dark:bg-gray-900" id="header">
<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 min-[2000px]:py-3">
    <a href="https://fap.fpt.edu.vn/Student.aspx" class="flex items-center space-x-3 rtl:space-x-reverse hover:no-underline">
        <img src="https://i.ibb.co/dLMy0d8/logo.png" class="h-12 min-[2000px]:h-14" alt="FAP Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" value="FAP Name">FPT University Academic Portal</span>
    </a>
    
    <!--Searchbar-->
    <div class="flex">
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="${placeholder}">
      <!--Search Dropdown -->
      <div class="max-h-60 hidden overflow-y-auto z-50 w-full absolute top-full text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="search-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          ${searchRegisHTML}
          ${searchInfoHTML}
          ${searchReportHTML}
          ${searchCouseraHTML}
          ${searchRegularHTML}
          ${searchOtherHTML}
        </ul>
      </div>
    </div>
  </div>

  <div class="flex relative items-center space-x-1 md:space-x-0 rtl:space-x-reverse">
      <button type="button" id="language-btn" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
        <img class="w-5 h-5 rounded-full me-3 object-cover" src=${languageImg} alt="Vietnamese" title="Tiếng Việt">
        ${languageText}
      </button>
      <!-- Dropdown -->
      <div class="z-50 hidden w-full absolute top-full text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
        <ul class="py-2 font-medium" role="none">
          <li>
            <a id="english-dropdown" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <img class="h-4 w-4 rounded-full me-2 object-cover" src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-anh.jpg" alt="Vietnamese" title="Tiếng Việt">
                English (US)
              </div>
            </a>
          </li>
          <li>
            <a id="vietnamese-dropdown" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <img class="h-4 w-4 rounded-full me-2 object-cover" src="https://portal.ptit.edu.vn/wp-content/uploads/2016/04/quoc-ky-viet-nam.jpg" alt="Vietnamese" title="Tiếng Việt">
                Vietnamese
              </div>
            </a>
          </li>
        </ul>
      </div>
  </div>

  
  

  <label id="darkmode-toggle" for="darkmode-checkbox" class="relative inline-flex items-center cursor-pointer">
    <div class="absolute z-10 flex items-center justify-between w-full px-2 text-lg">
      <i class="fas fa-moon text-yellow-300"></i>
      <i class="fas fa-sun text-red-800"></i>
    </div>
    <input id="darkmode-checkbox" type="checkbox" value="" class="sr-only peer" checked>
    <div class="relative w-16 h-8 bg-gray-200 rounded-full peer dark:bg-yellow-300 peer-checked:after:translate-x-8 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:z-20 after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  </label>
  


  <div class="flex relative items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-10 h-10 rounded-full" src="https://i.ibb.co/QNH0tHF/avatar1.png" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="absolute top-full right-0 w-44 z-50 hidden my-2z text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">${localStorage.getItem("fullName")}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">${localStorage.getItem("mss")}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="?view=user" class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">${accountText[0]}</a>
          </li>
          <li>
            <a href="?logout=true" class="block px-4 py-2 text-sm text-gray-700 hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">${accountText[1]}</a>
          </li>
        </ul>
      </div>
  </div>

</div>

<!--navbar-->
</nav>
<nav class="bg-gray-50 dark:bg-gray-700" id="navbar">
<div class="max-w-screen-xl px-4 py-3 min-[2000px]:py-4 mx-auto flex justify-center">
    <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
        <!-- Registration-->
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-sm min-[2000px]:text-base py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    ${itemNavText[0]}
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="${listRegisLink[0]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listRegisText[0]}</a>
                          </li>
                          <li>
                            <a href="${listRegisLink[1]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listRegisText[1]}</a>
                          </li>
                          <li>
                            <a href="${listRegisLink[2]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listRegisText[2]}</a>
                          </li>
                          <li>
                            <a href="${listRegisLink[3]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listRegisText[3]}</a>
                          </li>
                          <li>
                            <a href="${listRegisLink[4]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listRegisText[4]}</a>
                          </li>
                        </ul>
                    </div>
                </li>
        
                <!-- Information-->
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-sm min-[2000px]:text-base py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    ${itemNavText[1]}
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="${listInfoLink[0]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listInfoText[0]}</a>
                          </li>
                          <li>
                            <a href="${listInfoLink[1]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listInfoText[1]}</a>
                          </li>
                          <li>
                            <a href="${listInfoLink[2]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listInfoText[2]}</a>
                          </li>
                        </ul>
                    </div>
                </li>
        
                <!-- Report-->
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-sm min-[2000px]:text-base py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    ${itemNavText[2]}
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="${listReportLink[0]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[0]}</a>
                          </li>
                          <li>
                            <a href="${listReportLink[1]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[1]}</a>
                          </li>
                          <li>
                            <a href="${listReportLink[2]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[2]}</a>
                          </li>
                          <li>
                            <a href="${listReportLink[3]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[3]}</a>
                          </li>
                          <li>
                            <a href="${listReportLink[4]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[4]}</a>
                          </li>
                          <li>
                            <a href="${listReportLink[5]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listReportText[5]}</a>
                          </li>
                        </ul>
                    </div>
                </li>
        
                <!-- Others-->
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-sm min-[2000px]:text-base py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    ${itemNavText[5]}
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownNavbar" class="z-10 absolute hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                          <li>
                            <a href="${listCouseraLink[3]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listCouseraText[3]}</a>
                          </li>
                          <li>
                            <a href="${listOtherLink[11]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listOtherText[11]}</a>
                          </li>
                          <li>
                            <a href="${listOtherLink[12]}" class="block px-4 hover:no-underline py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${listOtherText[12]}</a>
                          </li>
                        </ul>
                    </div>
                </li>
        </ul>
    </div>
</div>
</nav>
` + contentBody.outerHTML;



var contentToPadding = document.querySelectorAll('form[name="aspnetForm"]>table>tbody>tr>td');
contentToPadding[0].classList.add("px-24");
contentToPadding[1].classList.add("px-24");

