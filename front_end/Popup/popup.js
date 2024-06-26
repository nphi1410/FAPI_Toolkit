
const saveButton = document.querySelector("#save-button");
document.addEventListener("DOMContentLoaded", function() {
  saveButton.addEventListener("click", () => {
    const loginMode = document.querySelector("#login").value;
    const emailAddress = document.querySelector("#email-address").value;

    setToStorage("EMAIL_ADDRESS", emailAddress);
    setToStorage("LOGIN_MODE", loginMode);
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 
        {
          LOGIN_MODE: loginMode,
          EMAIL_ADDRESS: emailAddress,
        });
    });
    

    alert("Configured");
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const email = await getFromStorage("EMAIL_ADDRESS", "");
  const emailInput = document.querySelector("#email-address");
  emailInput.value = email;

  const loginMode = await getFromStorage("LOGIN_MODE", "");
  const loginInput = document.querySelector("#login");
  loginInput.value = loginMode;
});

