// Switch a language of index.html template.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

switchIndexLanguage();

function switchIndexLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie();
  const templatePath = staticFilesDirName + "/language/templates-translation/index.json";
  languageHandler.switch(templatePath, currentLanguage);
}