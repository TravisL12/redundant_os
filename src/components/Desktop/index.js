import React from "react";
import styled from "styled-components";

import DesktopWindow from "./DesktopWindow";

const DesktopWrapper = styled.div`
  position: relative;
  z-index: 0;
  flex: 1;
  background: ${({ theme }) => theme.color};
  transition: 1.5s linear background;
  border-bottom-left-radius: $desktop-border-radius;
  border-bottom-right-radius: $desktop-border-radius;
`;

const Desktop = ({ windows, closeWindow, updateWindowOrder }) => {
  return (
    <DesktopWrapper>
      {windows.map((windowContent) => (
        <DesktopWindow
          key={`window-${windowContent.id}`}
          windowContent={windowContent}
          isActive={windowContent.sort === windows.length - 1}
          select={updateWindowOrder}
          close={closeWindow}
        />
      ))}
    </DesktopWrapper>
  );
};

export default Desktop;
