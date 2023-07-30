import styled from "styled-components";
import React, { useState } from "react";

interface IProps {
  onAddToDo: (toDo: string) => void;
}

const Input = styled.input`
  width: 100%;
  font-size: 1.1em;
  color: white;
`;

export default function ToDoInput({ onAddToDo }: IProps) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onAddToDo(inputValue);
    setInputValue("");
  };
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="새 할일"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
