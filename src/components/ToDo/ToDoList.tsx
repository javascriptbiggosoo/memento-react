import styled from "styled-components";

import { IToDo } from "./types";

interface ToDoListProps {
  toDos: IToDo[];
  onToDoClick: (idx: number) => void;
}

const ToDo = styled.li`
  margin: 2px 0 2px 0;
  opacity: ${({ isCompleted }: { isCompleted: boolean }) =>
    isCompleted && "0.5"};
`;

export default function ToDoList({ toDos, onToDoClick }: ToDoListProps) {
  const handleClick = (ev: React.MouseEvent<HTMLLIElement>) => {
    const toDoIdx = Number.parseInt(ev.target.closest("li").dataset.id);
    onToDoClick(toDoIdx);
  };
  return (
    <ul>
      {toDos.map(({ toDo, isCompleted }, idx) => (
        <ToDo
          key={idx}
          data-id={idx}
          onClick={handleClick}
          isCompleted={isCompleted}
        >
          {isCompleted ? toDo + ` ✅` : toDo + ` 📌`}
        </ToDo>
      ))}
    </ul>
  );
}
