var success = document.querySelector('#ctl00_mainContent_lblMege');
if(success.textContent === ""){
        var elements = document.querySelectorAll(
            '[id^="ctl00_mainContent_reload_ctl"][id$="_chkList_0"]'
        );
        
        for (e of elements) {
            e.checked = true
        }
        
        var submit = document.querySelector(
            '#ctl00_mainContent_btSendFeedback'
        );
        submit.click();
}
