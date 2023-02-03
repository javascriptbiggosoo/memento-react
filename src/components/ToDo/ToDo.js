import styled from "styled-components";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoContainer = styled.section`
  border: 1px solid;
  border-radius: var(--border-radius);
  background-color: black;
  opacity: 0.75;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;

  padding: 11px 21px 11px 21px;
  min-height: 180px;
  width: 320px;
  right: 8px;
  bottom: 8px;
`;

export default function ToDo() {
  return (
    <ToDoContainer>
      <ToDoList></ToDoList>
      <ToDoInput></ToDoInput>
    </ToDoContainer>
  );
}
