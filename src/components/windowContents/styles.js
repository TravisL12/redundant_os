import styled from "styled-components";

export const SWindowWrapper = styled.div`
  padding: 20px;
`;

export const SIconFile = styled.div`
  text-align: center;
  span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }
`;

export const SIconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  justify-items: center;
  grid-gap: 20px;
`;
