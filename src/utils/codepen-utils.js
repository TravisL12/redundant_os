import { IFRAME_TYPE } from "../components/windowContents";
import codePenList from "./codePenList";

export function getCodePenUrl(id) {
  return `https://codepen.io/TravisL12/embed/${id}?height=265&theme-id=dark&default-tab=result`;
}

export function getCodePenWindows(list = codePenList) {
  return list.map((pen) => ({
    title: pen.name,
    type: IFRAME_TYPE,
    content: {
      name: pen.name,
      url: getCodePenUrl(pen.id),
      size: { width: "800px", height: "600px" },
    },
  }));
}
