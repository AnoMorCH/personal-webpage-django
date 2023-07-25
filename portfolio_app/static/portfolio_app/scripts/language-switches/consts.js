// Stores all used in "language switch" constants.

import { getAnswerFromAPI } from "./helpers/support.js";

const languageVarName = "language";
const lightGreenColorClassName = "light-green-color";
const staticFilesDirName = await getStaticFilesDirName(); 

async function getStaticFilesDirName() {
  // TODO. Rename from "API" to "Api".
  const apiAnswer = await getAnswerFromAPI("/get_current_static_path/");
  const answer = apiAnswer.path; 
  return answer;
}

export { languageVarName, lightGreenColorClassName, staticFilesDirName };