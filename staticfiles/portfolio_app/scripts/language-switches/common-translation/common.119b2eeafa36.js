// Switch a language of common things (like the language switch btns, title
// etc).

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

function switchCommonLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie();
  const templatePath = staticFilesDirName + "language/common-translation/common.json";
  languageHandler.switch(templatePath, currentLanguage);
}

export { switchCommonLanguage };