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

// ADD BACKGROUND
var container = document.querySelector(".container");
var all = document.querySelector("body");
container.outerHTML =
  `
  <div class="background"><div class='background-front'></div></div>
` + container.outerHTML;

// remove breadcumb
var infoAccount = document.querySelector("#ctl00_divUser");
var breadcumb = document.querySelector(".breadcrumb");
infoAccount.style.display = "none";
breadcumb.style.display = "none";

// body
var body = document.querySelectorAll(".row")[1];
var contentBody = body.querySelector(".col-md-12");
console.log(body)
console.log(contentBody)

var row = document.querySelectorAll(".row")[0]
// row.outerHTML = row.outerHTML +`<div>hello</div>`


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


// contentBody.outerHTML =  
//   `
//   <div class='navbar'>
//     <ul class='navbar-list'>
//       <li class='navbar-item'>
//         ${itemNavText[0]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-70'>
//               <a href="${listRegisLink[0]}">${listRegisText[0]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-30'>
//               <a href="${listRegisLink[1]}">${listRegisText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-70'>
//               <a href="${listRegisLink[2]}">${listRegisText[2]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-30'>
//               <a href="${listRegisLink[3]}">${listRegisText[3]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[4]}">${listRegisText[4]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[5]}">${listRegisText[5]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[6]}">${listRegisText[6]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[7]}">${listRegisText[7]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[8]}">${listRegisText[8]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[9]}">${listRegisText[9]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-50'>
//               <a href="${listRegisLink[10]}">${listRegisText[10]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-50'>
//               <a href="${listRegisLink[11]}">${listRegisText[11]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[12]}">${listRegisText[12]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-70'>
//               <a href="${listRegisLink[13]}">${listRegisText[13]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-30'>
//               <a href="${listRegisLink[14]}">${listRegisText[14]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[15]}">${listRegisText[15]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[16]}">${listRegisText[16]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-50'>
//               <a href="${listRegisLink[17]}">${listRegisText[17]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-50'>
//               <a href="${listRegisLink[18]}">${listRegisText[18]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-70'>
//               <a href="${listRegisLink[19]}">${listRegisText[19]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-30'>
//               <a href="${listRegisLink[20]}">${listRegisText[20]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[21]}">${listRegisText[21]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegisLink[22]}">${listRegisText[22]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[1]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[0]}">${listInfoText[0]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[1]}">${listInfoText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[2]}">${listInfoText[2]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[3]}">${listInfoText[3]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[4]}">${listInfoText[4]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[5]}">${listInfoText[5]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[6]}">${listInfoText[6]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[7]}">${listInfoText[7]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listInfoLink[8]}">${listInfoText[8]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[2]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[0]}">${listReportText[0]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[1]}">${listReportText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[2]}">${listReportText[2]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[3]}">${listReportText[3]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[4]}">${listReportText[4]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listReportLink[5]}">${listReportText[5]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[3]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listCouseraLink[0]}">${listCouseraText[0]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listCouseraLink[1]}">${listCouseraText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listCouseraLink[2]}">${listCouseraText[2]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listCouseraLink[3]}">${listCouseraText[3]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listCouseraLink[4]}">${listCouseraText[4]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[4]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegularLink[0]}">${listRegularText[0]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegularLink[1]}">${listRegularText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listRegularLink[2]}">${listRegularText[2]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[5]}
//         <ul class='subnav-list'>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-50'>
//               <a href="${listOtherLink[0]}">${listOtherText[0]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-50'>
//               <a href="${listOtherLink[1]}">${listOtherText[1]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn front percent-50'>
//               <a href="${listOtherLink[2]}">${listOtherText[2]}</a>
//             </button>
//             <button class='subnav-item_btn end percent-50'>
//               <a href="${listOtherLink[3]}">${listOtherText[3]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[4]}">${listOtherText[4]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[5]}">${listOtherText[5]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[6]}">${listOtherText[6]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[7]}">${listOtherText[7]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[8]}">${listOtherText[8]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[9]}" target="_blank">${listOtherText[9]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[10]}" target="_blank">${listOtherText[10]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[11]}" target="_blank">${listOtherText[11]}</a>
//             </button>
//           </li>
//           <li class='subnav-item'>
//             <button class='subnav-item_btn'>
//               <a href="${listOtherLink[12]}" target="_blank">${listOtherText[12]}</a>
//             </button>
//           </li>
//         </ul>
//       </li>
//       <li class='navbar-item'>
//         ${itemNavText[6]}
//         <div class='subnav-list full'>
//           <div class='subnav-list_table'>
//             ${localStorage.getItem('tableNotice')}
//           </div>
//         </div>
//       </li>
//     </ul>
//   </div>
// ` + contentBody.outerHTML;

contentBody.outerHTML = `
  
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
  <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
      </li>
      <li>
          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></button>
          <!-- Dropdown menu -->
          <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></button>
                  <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Overview</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My downloads</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Billing</a>
                        </li>
                        <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Rewards</a>
                        </li>
                      </ul>
                  </div>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </div>
          </div>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
      </li>
    </ul>
  </div>
</div>
</nav>

` + contentBody.outerHTML;
