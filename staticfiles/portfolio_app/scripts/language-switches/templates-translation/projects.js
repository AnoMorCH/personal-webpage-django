// Switch a language of projects.html template.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

switchProjectsLanguage();

function switchProjectsLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie(); 
  const templatePath = staticFilesDirName + "language/templates-translation/projects.json";
  languageHandler.switch(templatePath, currentLanguage);
}
