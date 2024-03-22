// const loginBtn = document.getElementsByClassName("btn-primary");
// const main = async () => {
//     const fap1_ = await getFromStorage('FAP_1', '');
//     const gen_ = await getFromStorage('K', '');
//
//     const checkFap = (url.includes("fap.fpt.edu.vn")&&fap1_==true)
//     const checkK19 = (url.includes("feid.fpt.edu.vn")&&gen_==true)
//
//     if(checkFap&&checkK19)
//     {
//         for(let i=0; i<loginBtn.length; i++)
//         {
//             if(loginBtn[i].innerHTML.includes("Email fpt.edu.vn hoặc Gmail"))
//             {
//                 loginBtn[i].click();
//             }
//
//         }
//     }}
// main();





document.querySelectorAll(".btn-outline-primary").forEach((e) => {
    if (e.textContent.includes("Email fpt.edu.vn hoặc Gmail")) {
      e.click();
    }
  });