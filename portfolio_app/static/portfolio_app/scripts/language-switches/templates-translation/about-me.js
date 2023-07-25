// Switch a language of about-me.html template.

import { staticFilesDirName } from "../consts.js";
import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchAboutMeLanguage();

function switchAboutMeLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = staticFilesDirName + "/language/templates-translation/about-me.json";
  switchLanguage(currentLanguage, templatePath);
}