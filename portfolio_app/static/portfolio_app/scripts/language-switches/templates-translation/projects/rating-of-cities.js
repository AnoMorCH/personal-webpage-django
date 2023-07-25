// Switch a language of projects/rating-of-cities.html template.

import { getCurrentLanguage, switchLanguage } from "../../helpers/support.js";

switchRatingOfCitiesLanguage();

function switchRatingOfCitiesLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/templates-translation/projects/rating-of-cities.json";
  switchLanguage(currentLanguage, templatePath);
}