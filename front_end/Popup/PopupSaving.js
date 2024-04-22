chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Check if the action is to reload the page
    var info = message;
    console.log(info);
    localStorage.setItem("LOGIN_MODE", info.LOGIN_MODE);
    localStorage.setItem("EMAIL_ADDRESS", info.EMAIL_ADDRESS);
    chrome.storage.sync.set({LOGIN_MODE: info.LOGIN_MODE, EMAIL_ADDRESS: info.EMAIL_ADDRESS}, function() {
        console.log('Value is set to ' + info.LOGIN_MODE + ' ' + info.EMAIL_ADDRESS);
    });
});
