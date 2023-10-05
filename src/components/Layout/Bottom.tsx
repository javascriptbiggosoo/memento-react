import styled from "styled-components";

import Setting from "../Setting/Setting";
import ToDo from "../ToDo/Index";

const BottomContainer = styled.footer`
  display: flex;

  justify-content: space-between;
  width: 100%;
  min-height: 40px;
`;

export default function Bottom() {
  return (
    <BottomContainer>
      <Setting></Setting>
      <ToDo></ToDo>
    </BottomContainer>
  );
}
