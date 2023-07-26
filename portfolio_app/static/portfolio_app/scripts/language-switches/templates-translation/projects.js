// Switch a language of projects.html template.

import { staticFilesDirName } from "../consts.js";
import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchProjectsLanguage();

function switchProjectsLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = staticFilesDirName + "/language/templates-translation/projects.json";
  switchLanguage(currentLanguage, templatePath);
}
