import { useEffect } from "react";

import { useRecoilState } from "recoil";
import styled from "styled-components";

import { getItem, setItem } from "../../utils/localStorage";
import { toDoState } from "../../atoms";
import { IToDo } from "./types";
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
  const [toDos, setToDos] = useRecoilState(toDoState);

  useEffect(() => {
    const initialToDos = getItem("toDos", []).filter(
      (toDo: IToDo) => toDo.isCompleted === false
    );
    // console.log(initialToDos);
    setToDos(initialToDos);
  }, [setToDos]);

  const handleAddToDo = (toDo: string) => {
    setToDos((toDos) => {
      return [...toDos, { toDo: toDo, isCompleted: false }];
    });
    setItem("toDos", toDos);
  };
  const handleToDoClick = (toDoIdx: number) => {
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
