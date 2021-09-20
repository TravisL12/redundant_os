import React from "react";
import { useWindowManager } from "../../WindowManagerProvider";
import { SWindowWrapper, SIconFile, SIconsGrid } from "../styles";

const CodePens = ({ pens }) => {
  const { openWindow } = useWindowManager();

  return (
    <SWindowWrapper>
      <SIconsGrid>
        {pens.map((pen, idx) => (
          <SIconFile key={idx}>
            <span
              onClick={(event) => {
                event.stopPropagation();
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
