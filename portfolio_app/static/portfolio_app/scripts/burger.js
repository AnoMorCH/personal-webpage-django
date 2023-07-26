// The script is responsible for uploading of the burger and handling its 
// translation process.

import { NavMenu } from "./classes/nav-menu.js";
import { switchBurgerLanguage } from "./language-switches/burger-translation/burger.js";

main();

function main() {
  const navMenu = new NavMenu();
  navMenu.manageEventsToOpenClose();
  switchBurgerLanguage();
}