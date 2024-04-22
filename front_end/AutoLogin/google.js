const account = document.querySelectorAll(".VV3oRb.YZVTmd.SmR8");
var emailAccount;
chrome.storage.sync.get(['EMAIL_ADDRESS'], function(result) {
  emailAccount = result.EMAIL_ADDRESS;
});
chrome.storage.sync.get(['LOGIN_MODE'], function(result) {
  var loginMode = result.LOGIN_MODE;
  if(loginMode != "notLogin") {
    account.forEach((element) => {
      if (element.textContent.includes(emailAccount)) {
        element.click();
      }
      element.addEventListener("click", () => {
        chrome.storage.sync.set({EMAIL_ADDRESS: element.getAttribute('data-identifier')}, function() {});
      });
    });
  }
});

