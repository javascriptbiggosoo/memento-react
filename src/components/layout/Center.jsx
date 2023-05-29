import styled from "styled-components";
import Clock from "../Clock/Index";
import Greeting from "../Greeting/Index";

const CenterContainer = styled.main`
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
