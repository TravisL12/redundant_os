import React, { useMemo } from "react";
import { getCodePenWindows } from "../../../utils/codepen-utils";
import { useWindowManager } from "../../WindowManagerProvider";
import { SWindowWrapper, SIconFile, SIconsGrid } from "../styles";

const CodePens = () => {
  const { openWindow } = useWindowManager();
  const codePens = useMemo(getCodePenWindows, []);

  const pens = codePens.slice(0, 20);

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
