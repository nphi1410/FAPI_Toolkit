// const settingForm = document.querySelector('form');
// const emailInput = document.querySelector('#email');
// // const autoLoginCheckbox = document.querySelector('#auto-login');

// settingForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     // const autoLogin = e.target.autoLogin.checked;

//     setToStorage('STUDENT_EMAIL', email);
//     // setToStorage('AUTO_LOGIN', autoLogin);

//     alert('Configured');

//     // exit
//     window.close();
// });

// // when DOM is ready
// document.addEventListener('DOMContentLoaded', async () => {
//     const email = await getFromStorage('STUDENT_EMAIL', '');
//     emailInput.value = email;

//     // const autoLogin = await getFromStorage('AUTO_LOGIN', false);
//     // autoLoginCheckbox.checked = autoLogin;
// });

const saveButton = document.querySelector("#save-button");

saveButton.addEventListener("click", () => {
  const loginMode = document.querySelector("#login").value;
  const emailAddress = document.querySelector("#email-address").value;

  setToStorage("EMAIL_ADDRESS", emailAddress);
  setToStorage("LOGIN_MODE", loginMode);

  alert("Configured");
});
document.addEventListener("DOMContentLoaded", async () => {
  const email = await getFromStorage("EMAIL_ADDRESS", "");
  const emailInput = document.querySelector("#email-address");
  emailInput.value = email;

  const loginMode = await getFromStorage("LOGIN_MODE", "");
  const loginInput = document.querySelector("#login");
  loginInput.value = loginMode;
});
