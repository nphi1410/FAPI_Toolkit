const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const loginMode = localStorage.getItem("LOGIN_MODE");
if (loginMode != "notLogin" && loginMode != null) {
    if (selectEl.selectedIndex !== 1) {
        // change value of select to FU - Hòa Lạc
        selectEl.selectedIndex = 1;
        __doPostBack('ctl00$mainContent$ddlCampus', '');
    } else {
        if(loginMode == "googleLogin") 
            document.querySelector("#ctl00_mainContent_btnLogin").click();
        if(loginMode == "feidLogin")
            document.querySelector("#ctl00_mainContent_btnloginFeId").click();
    }
}
