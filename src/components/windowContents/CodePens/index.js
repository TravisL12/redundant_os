import React from "react";
import { getCodePenWindows } from "../../../utils/codepen-utils";
import { useWindowManager } from "../../WindowManagerProvider";
import { SWindowWrapper, SIconFile, SIconsGrid } from "../styles";

/**
 * this is a file window that opens content
 * in a new window
 */

const CodePens = ({ pens }) => {
  const { openWindow } = useWindowManager();

  return (
    <SWindowWrapper>
      <SIconsGrid>
        {getCodePenWindows(pens).map((pen, idx) => (
          <SIconFile key={idx}>
            <span
              onClick={(event) => {
                event.stopPropagation(); // stop click from activating window
                openWindow(pen);
              }}
            >
              {pen.title}
            </span>
          </SIconFile>
        ))}
      </SIconsGrid>
    </SWindowWrapper>
  );
};

export default CodePens;
