// The class which handles language logic.

import {
  languageVarName,
  lightGreenColorClassName,
  staticFilesDirName
} from "../language-switches/consts.js";
import { Language } from "../language-switches/enums.js";
import { getAnswerFromApi } from "../language-switches/helpers/support.js";

class LanguageHandler {
  async switch(templatePath, currentLanguage) {
    const allTranslations = await getAnswerFromApi(templatePath);
    const currentTranslation = allTranslations[currentLanguage]

    for (const elementId in currentTranslation) {
      if (this.#isParameterImg(elementId)) {
        this.#handleAsImg(elementId, currentTranslation);
      } else if (this.#isParameterFullLink(elementId)) {
        this.#handleAsFullLink(elementId, currentTranslation);
      } else {
        this.#handleAsOrdinary(elementId, currentTranslation);
      }
    }
  }

  setEventsOnSwitchBtns(switchBtns) {
    Array.from(switchBtns).forEach(switchBtn => {
      switchBtn.addEventListener("click", () => {
        const selectedLanguage = switchBtn.id;
        this.setCurrentAsCookie(selectedLanguage);
        window.location.reload();
      });
    });
  }

  getSwitchBtns() {
    const container = document.getElementById("language-switch");
    const switchBtns = container.getElementsByTagName("span");
    return switchBtns;
  }

  colorSelectedBtn(currentLanguage) {
    try {
      const btn = document.getElementById(currentLanguage);
      btn.classList.add(lightGreenColorClassName);
    } catch (error) {
      window.location.reload();
    }
  }

  setInitial(currentLanguage) {
    if (currentLanguage === undefined) {
      this.setCurrentAsCookie(Language.English);
    }
  }

  setCurrentAsCookie(selectedLanguage) {
    Cookies.set(languageVarName, selectedLanguage);
  }

  getCurrentFromCookie() {
    return Cookies.get(languageVarName);
  }

  // The difference between "full link" and just "link" is that the "full link"
  // is designed to change both href and innerHTML when "link" - only href.
  #isParameterFullLink(parameter) {
    return parameter.includes("full-url");
  }

  #handleAsFullLink(elementId, currentTranslation) {
    const translation = currentTranslation[elementId];
    const element = document.getElementById(elementId);
    if (element !== null) { element.innerHTML = translation; }
  }

  #isParameterImg(parameter) {
    return parameter.includes("img");
  }

  #handleAsImg(elementId, currentTranslation) {
    let path = currentTranslation[elementId];
    path = staticFilesDirName + path;
    const element = document.getElementById(elementId);
    if (element !== null) { element.src = path; }
  }

  #handleAsOrdinary(elementId, currentTranslation) {
    const translation = currentTranslation[elementId];
    const element = document.getElementById(elementId);
    if (element !== null) { element.innerHTML = translation; }
  }
}

export { LanguageHandler };