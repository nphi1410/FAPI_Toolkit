// const main = async () => {
//   const feidButton = document.querySelector("#ctl00_mainContent_btnloginFeId");
//   const loginMode = await getFromStorage("LOGIN_MODE", "");

//   if (loginMode === "feidLogin") {
//     feidButton.click();
//   } else if (loginMode === "googleLogin") {
//     const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");

//     if (selectEl.selectedIndex !== 1) {
//       // change value of select to FU - Hòa Lạc
//       selectEl.selectedIndex = 1;
//       __doPostBack("ctl00$mainContent$ddlCampus", "");
//     } else {
//       const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");
//       loginBtn.click();
//     }
//   }
// };

// main();

// chrome.storage.sync.get(["LOGIN_MODE"]).then((mode) => {
  // console.log(mode.LOGIN_MODE);
// });

console.log("main");
document.addEventListener("DOMContentLoaded", async () => {
  const email = await getFromStorage("EMAIL_ADDRESS", "");
  console.log(email);
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
);