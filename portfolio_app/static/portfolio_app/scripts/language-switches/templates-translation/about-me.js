// Switch a language of about-me.html template.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

switchAboutMeLanguage();

function switchAboutMeLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie();
  const templatePath = staticFilesDirName + "/language/templates-translation/about-me.json";
  languageHandler.switch(templatePath, currentLanguage);
}