console.log("popup dds");



const saveButton = document.querySelector("#save-button");
document.addEventListener("DOMContentLoaded", function() {
  saveButton.addEventListener("click", () => {
    const loginMode = document.querySelector("#login").value;
    const emailAddress = document.querySelector("#email-address").value;

    setToStorage("EMAIL_ADDRESS", emailAddress);
    setToStorage("LOGIN_MODE", loginMode);
    
    (async () => {
      const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
      const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
      // do something with response here, not outside the function
      console.log(response);
    })();
    

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

