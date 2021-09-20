import React from "react";
import styled from "styled-components";
import { useMyTheme } from "../../MyThemeProvider";

const ColorListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: #aaa;
  }
  span {
    display: inline-block;
    margin-right: 5px;
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background: ${({ color }) => color};
  }
`;

const BackgroundColor = () => {
  const { updateTheme } = useMyTheme();
  const colors = ["red", "lightgreen", "lightblue", "purple", "magenta"];

  return (
    <>
      <h3>Background Color</h3>
      <ul>
        {colors.map((color, idx) => (
          <ColorListItem
            key={idx}
            color={color}
            onClick={() => updateTheme({ color })}
          >
            <span></span>
            {color}
          </ColorListItem>
        ))}
      </ul>
    </>
  );
};

export default BackgroundColor;
