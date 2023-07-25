// Switch a language of about-me.html template.

import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchAboutMeLanguage();

function switchAboutMeLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/templates-translation/about-me.json";
  switchLanguage(currentLanguage, templatePath);
}