const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const loginMode = localStorage.getItem("LOGIN_MODE");
if (loginMode != "notLogin") {
    if (selectEl.selectedIndex !== 1) {
        // change value of select to FU - Hòa Lạc
        selectEl.selectedIndex = 1;
        __doPostBack('ctl00$mainContent$ddlCampus', '');
    } else {
        const loginBtn = (loginMode == "googleLogin") ? document.querySelector("#ctl00_mainContent_btnLogin") : document.querySelector("#ctl00_mainContent_btnloginFeId");
        loginBtn.click();
    }
}
