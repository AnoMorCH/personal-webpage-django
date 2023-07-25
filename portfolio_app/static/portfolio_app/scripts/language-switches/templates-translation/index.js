// Switch a language of index.html template.

import { staticFilesDirName } from "../consts.js";
import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchIndexLanguage();

function switchIndexLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = staticFilesDirName + "/language/templates-translation/index.json";
  switchLanguage(currentLanguage, templatePath);
}