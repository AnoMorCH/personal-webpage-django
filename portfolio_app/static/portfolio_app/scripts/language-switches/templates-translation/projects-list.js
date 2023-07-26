import { staticFilesDirName } from "../consts.js";
import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchExistingProjectsLanguage();

function switchExistingProjectsLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = staticFilesDirName + "/language/templates-translation/projects-list.json";
  switchLanguage(currentLanguage, templatePath);
}