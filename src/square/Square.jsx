import { useState } from "react";
import { StyledSquare } from "./square.styles";

const Square = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <>
        <StyledSquare $isClicked={isClicked} />
        <button onClick={() => setIsClicked(!isClicked)}>CHANGE COLOR</button>
      </>
    </>
  );
};
export default Square;
