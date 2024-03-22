const main = async () => {
  const email = await getFromStorage("STUDENT_EMAIL", "");

  const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
  const emailEl2 = document.querySelector(`div[data-identifier="${email}"]`);

  console.log(email, emailEl, emailEl2);

  if (emailEl) {
    emailEl.click();
  } else if (emailEl2) {
    emailEl2.click();
  }
};

main();
