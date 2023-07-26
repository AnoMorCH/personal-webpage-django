import { languageVarName, staticFilesDirName } from "../consts.js";

function getCurrentLanguage() {
  return Cookies.get(languageVarName);
}

function getAnswerFromApi(path) {
  return fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("The handling of the API was unsuccessful.");
      }
      return response.json();
    })
    .then((data) => { return data; })
    .catch((error) => { console.log(error); });
}

async function switchLanguage(currentLanguage, templatePath) {
  const allTranslations = await getAnswerFromApi(templatePath);
  const currentLanguageTranslation = allTranslations[currentLanguage];
  for (const elementId in currentLanguageTranslation) {
    if (isParameterLink(elementId)) {
      handleAsLink(elementId, currentLanguageTranslation);
    } else {
      handleAsOrdinary(elementId, currentLanguageTranslation);
    }
  }
}

function isParameterLink(parameter) {
  return parameter.includes("link");
}

function handleAsLink(elementId, currentLanguageTranslation) {
  let path = currentLanguageTranslation[elementId];
  path = staticFilesDirName + path;
  const element = document.getElementById(elementId);
  if (element !== null) { element.src = path; }
}

function handleAsOrdinary(elementId, currentLanguageTranslation) {
  const elementTranslation = currentLanguageTranslation[elementId];
  const element = document.getElementById(elementId);
  if (element !== null) { element.innerHTML = elementTranslation; }
}

export { getCurrentLanguage, getAnswerFromApi, switchLanguage };