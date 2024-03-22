
if(localStorage.getItem("isSetLanguageStorage") === null) {
    localStorage.setItem("regisText", listRegisText);
    localStorage.setItem("infoText", listInfoText);
    localStorage.setItem("reportText", listReportText);
    localStorage.setItem("couseraText", listCouseraText);
    localStorage.setItem("regularText", listRegularText);
    localStorage.setItem("otherText", listOtherText);
    localStorage.setItem("itemNavText", itemNavText); 
    localStorage.setItem("accountText", accountText);
    localStorage.setItem("langBtnText", languageBtnText);
    localStorage.setItem("langText", languageText);
    localStorage.setItem("languageImg", languageImg);
    localStorage.setItem("placeholder", placeholder);
    localStorage.setItem("day", day);
    localStorage.setItem("isSetLanguageStorage", true);
  }
  
  listRegisText = localStorage.getItem("regisText").split(",");
  listInfoText = localStorage.getItem("infoText").split(",");
  listReportText = localStorage.getItem("reportText").split(",");
  listCouseraText = localStorage.getItem("couseraText").split(",");
  listRegularText = localStorage.getItem("regularText").split(",");
  listOtherText = localStorage.getItem("otherText").split(",");
  itemNavText = localStorage.getItem("itemNavText").split(",");
  accountText = localStorage.getItem("accountText").split(",");
  languageBtnText = localStorage.getItem("langBtnText");
  languageText = localStorage.getItem("langText");
  languageImg = localStorage.getItem("languageImg");
  placeholder = localStorage.getItem("placeholder");
  day = localStorage.getItem("day").split(",");

  languageChange = () => {
  if (localStorage.getItem("lang") === "vi") {
    listRegisText = listRegisTextVI;
    listInfoText = listInfoTextVI;
    listReportText = listReportTextVI;
    listCouseraText = listCouseraTextVI;
    listRegularText = listRegularTextVI;
    listOtherText = listOtherTextVI;
    itemNavText = itemNavTextVI;
    accountText = accountTextVI;
    languageBtnText = languageBtnTextVI;
    languageText = languageTextVI;
    languageImg = languageImgVI;
    placeholder = placeholderVI;
    day = dayVI;
  } else {
    listRegisText = listRegisTextEN;
    listInfoText = listInfoTextEN;
    listReportText = listReportTextEN;
    listCouseraText = listCouseraTextEN;
    listRegularText = listRegularTextEN;
    listOtherText = listOtherTextEN;
    itemNavText = itemNavTextEN;
    accountText = accountTextEN;
    languageBtnText = languageBtnTextEN;
    languageText = languageTextEN;
    languageImg = languageImgEN;
    placeholder = placeholderEN;
    day = dayEN;
  }
  localStorage.setItem("regisText", listRegisText);
  localStorage.setItem("infoText", listInfoText);
  localStorage.setItem("reportText", listReportText);
  localStorage.setItem("couseraText", listCouseraText);
  localStorage.setItem("regularText", listRegularText);
  localStorage.setItem("otherText", listOtherText);
  localStorage.setItem("itemNavText", itemNavText);
  localStorage.setItem("accountText", accountText);
  localStorage.setItem("langBtnText", languageBtnText);
  localStorage.setItem("langText", languageText);
  localStorage.setItem("languageImg", languageImg);
  localStorage.setItem("placeholder", placeholder);
  localStorage.setItem("day", day);
};