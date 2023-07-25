// Switch a language of the burger.

import { staticFilesDirName } from "../consts.js";
import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

function switchBurgerLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = staticFilesDirName + "/language/burger-translation/burger.json";
  switchLanguage(currentLanguage, templatePath);
}

export { switchBurgerLanguage };