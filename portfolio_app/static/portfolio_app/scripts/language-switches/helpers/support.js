import { languageVarName } from "../consts.js";

function getCurrentLanguage() {
  return Cookies.get(languageVarName);
}

// TODO. Think if you can somehow unite it.
function getAnswerFromAPI(path) {
  return fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error("The handling of the API was unsuccessful.");
      }
      return response.json();
    })
    .then((data) => { return data; })
    .catch((error) => console.log(error));
}

// TODO. Think if you can somehow unite it.
function getLanguageJsonFile(filePath) {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("An error has occurred during data transfer");
      }
      return response.json();
    })
    .then((data) => { return data; })
    .catch((error) => { console.log(error); });
}

function switchLanguage(currentLanguage, templatePath) {
  getLanguageJsonFile(templatePath).then((allTranslations) => {
    const currentLanguageTranslation = allTranslations[currentLanguage];
    for (const elementId in currentLanguageTranslation) {
      const elementTranslation = currentLanguageTranslation[elementId];
      const element = document.getElementById(elementId);
      if (element !== null) { element.innerHTML = elementTranslation; }
    }
  });
}

export { getCurrentLanguage, getAnswerFromAPI, switchLanguage };