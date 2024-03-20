// const url = window.location.href;
// const main = async () => {
//     const email = await getFromStorage('STUDENT_EMAIL', '');
//     const fap1_ = await getFromStorage('FAP_1', '');
//     const gen_ = await getFromStorage('K', '');
//
//     if((url.includes("fap.fpt.edu.vn")&&gen_==false&&fap1_==true)||(url.includes("feid.fpt.edu.vn")&&gen_==true))
//     {
//         document.querySelector("#identifierId").setAttribute('value', email);
//         // setTimeout(() => {
//         //     const nextBtn = document.querySelector(".VfPpkd-Jh9lGc");
//         //     nextBtn.click();
//         // },2000)
//
//     }
//
// }
// main();

const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");

if (selectEl.selectedIndex !== 1) {
    // change value of select to FU - Hòa Lạc
    selectEl.selectedIndex = 1;
    __doPostBack('ctl00$mainContent$ddlCampus','');
} else {
    const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");
    loginBtn.click();
}