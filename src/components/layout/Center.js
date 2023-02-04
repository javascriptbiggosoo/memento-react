import styled from "styled-components";
import Clock from "../Clock/Clock";
import Greeting from "./../Greeting/Greeting";

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
