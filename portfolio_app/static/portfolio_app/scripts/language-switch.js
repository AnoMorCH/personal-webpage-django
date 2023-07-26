// The script is responsible for handling translation of the page except
// the burger functionality.

import { LanguageHandler } from "./classes/language-handler.js";

main();

function main() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie();
  const languageSwitchBtns = languageHandler.getSwitchBtns();
  languageHandler.setInitial(currentLanguage);
  languageHandler.setEventsOnSwitchBtns(languageSwitchBtns);
  languageHandler.colorSelectedBtn(currentLanguage);
}