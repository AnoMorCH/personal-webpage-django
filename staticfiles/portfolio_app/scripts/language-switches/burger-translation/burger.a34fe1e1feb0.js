// Switch a language of the burger.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

function switchBurgerLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie(); 
  const templatePath = staticFilesDirName + "language/burger-translation/burger.json";
  languageHandler.switch(templatePath, currentLanguage);
}

export { switchBurgerLanguage };