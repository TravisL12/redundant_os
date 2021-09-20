import { IFRAME_TYPE } from "../components/WindowContents";
import pens from "./codepens";

export function getCodePenUrl(id) {
  return `https://codepen.io/TravisL12/embed/${id}?height=265&theme-id=dark&default-tab=result`;
}

export function getCodePenWindows() {
  return pens
    .filter((pen) => pen.show)
    .map((pen) => ({
      title: pen.name,
      type: IFRAME_TYPE,
      content: {
        name: pen.name,
        url: getCodePenUrl(pen.id),
        size: { width: "800px", height: "600px" },
      },
    }));
}
