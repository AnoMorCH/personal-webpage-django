// Stores all used in "language switch" constants.

import { getAnswerFromApi } from "./helpers/support.js";

const languageVarName = "language";
const lightGreenColorClassName = "light-green-color";
const staticFilesDirName = await getStaticFilesDirName(); 

async function getStaticFilesDirName() {
  const apiAnswer = await getAnswerFromApi("/get_current_static_path/");
  const answer = apiAnswer.path; 
  return answer;
}

export { languageVarName, lightGreenColorClassName, staticFilesDirName };