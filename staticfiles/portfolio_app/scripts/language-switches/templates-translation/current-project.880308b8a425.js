// Switch a language of current-project.html template.

import { LanguageHandler } from "../../classes/language-handler.js";
import { staticFilesDirName } from "../consts.js";

switchIndexLanguage();

function switchIndexLanguage() {
  const languageHandler = new LanguageHandler();
  const currentLanguage = languageHandler.getCurrentFromCookie();
  const projectId = getCurrentProjectId();
  const templatePath = `${staticFilesDirName}/language/templates-translation/projects/${projectId}.json`;
  languageHandler.switch(templatePath, currentLanguage);
}

function getCurrentProjectId() {
  const projectIdElement = document.getElementById("project-id");
  const projectId = projectIdElement.value;
  return projectId;
}