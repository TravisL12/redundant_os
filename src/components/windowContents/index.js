import Welcome from "./Apps/Welcome";
import SystemPreferences from "./Preferences";
import Apod from "./Apps/Apod";
import CodePens from "./CodePens";
import { codePensByCategory, UTILITIES } from "../../utils/codePenList";

export const IFRAME_TYPE = "iframe";
export const COMPONENT_TYPE = "component";

const welcome = {
  title: "Welcome to Redundant Robot",
  type: COMPONENT_TYPE,
  content: { component: Welcome, size: { width: "640px", height: "400px" } },
};

const apod = {
  title: "Astronomy Picture of the Day",
  type: COMPONENT_TYPE,
  content: { component: Apod, size: { width: "800px", height: "600px" } },
};

const systemPreferences = {
  title: "System Preferences",
  type: COMPONENT_TYPE,
  content: { component: SystemPreferences },
};

const pensByCategory = codePensByCategory();
const codePens = {
  title: "Code Pens",
  type: COMPONENT_TYPE,
  content: { component: CodePens, props: { pens: pensByCategory[UTILITIES] } },
};

export { welcome, apod, systemPreferences, codePens };
