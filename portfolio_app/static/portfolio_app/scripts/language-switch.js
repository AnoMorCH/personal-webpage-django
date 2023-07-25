// The script is responsible for handling translation of the page except
// the burger functionality.

import {
  setInitialLanguage,
  getLanguageSwitchBtns,
  setEventsOnLanguageSwitchBtns,
  colorSelectedLanguageBtn
} from "./language-switches/helpers/set-current-language.js";

main();

function main() {
  setInitialLanguage();
  const languageSwitchBtns = getLanguageSwitchBtns();
  setEventsOnLanguageSwitchBtns(languageSwitchBtns);
  colorSelectedLanguageBtn();
}