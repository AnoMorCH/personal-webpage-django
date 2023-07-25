// Switch a language of projects.html template.

import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchProjectsLanguage();

function switchProjectsLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/templates-translation/projects.json";
  switchLanguage(currentLanguage, templatePath);
}
