import styled from "styled-components";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useEffect, useState } from "react";
import { getItem, setItem } from "./../../utils/localStorage";

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
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const initialToDos = getItem("toDos", []).filter(
      (toDo) => toDo.isCompleted === false
    );
    // console.log(initialToDos);
    setToDos(initialToDos);
  }, []);

  const handleAddToDo = (toDo) => {
    setToDos((toDos) => {
      return [...toDos, { toDo: toDo, isCompleted: false }];
    });
    setItem("toDos", toDos);
  };
  const handleToDoClick = (toDoIdx) => {
    setToDos((toDos) =>
      toDos.map(({ toDo, isCompleted }, idx) => {
        if (idx === toDoIdx) {
          isCompleted = !isCompleted;
        }
        return { toDo, isCompleted };
      })
    );
  };

  useEffect(() => {
    setItem("toDos", toDos);
  }, [toDos]);

  return (
    <ToDoContainer>
      <ToDoInput onAddToDo={handleAddToDo}></ToDoInput>
      <ToDoList toDos={toDos} onToDoClick={handleToDoClick}></ToDoList>
    </ToDoContainer>
  );
}
