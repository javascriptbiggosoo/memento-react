import styled from "styled-components";
import { useState } from "react";

export default function UserNameInput({ onSubmit }) {
  const [userName, setUserName] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(userName);
    setUserName("");
  };

  const handleChange = (ev) => {
    setUserName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="이름을 알려주세요."
        onChange={handleChange}
        value={userName}
      ></input>
    </form>
  );
}
