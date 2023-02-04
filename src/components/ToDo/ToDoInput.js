import styled from "styled-components";
import { useState } from "react";
const Input = styled.input`
  width: 100%;
  font-size: 1.1em;
  color: white;
`;

export default function ToDoInput({ onAddToDo }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToDo(inputValue);
    setInputValue("");
  };
  const handleChange = (ev) => {
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
