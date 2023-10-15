import styled from "styled-components";

import Clock from "../Clock";
import Greeting from "../Greeting";

const CenterContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Center() {
  return (
    <CenterContainer>
      <Clock></Clock>
      <Greeting></Greeting>
    </CenterContainer>
  );
}
