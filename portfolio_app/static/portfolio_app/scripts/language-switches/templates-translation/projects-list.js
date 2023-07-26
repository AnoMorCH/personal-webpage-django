// Switch a language of the projects list inside of project.html template.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

switchExistingProjectsLanguage();

function switchExistingProjectsLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie(); 
  const templatePath = staticFilesDirName + "/language/templates-translation/projects-list.json";
  languageHandler.switch(templatePath, currentLanguage);
}