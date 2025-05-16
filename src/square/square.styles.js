import styled from "styled-components";

const StyledSquare = styled.div`
  background-color: ${({ $isClicked }) => ($isClicked ? "yellow" : "pink")};
  width: 200px;
  height: 200px;
`;

export { StyledSquare };
