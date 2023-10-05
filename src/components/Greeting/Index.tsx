import { useEffect, useState } from "react";

import { getItem, setItem } from "../../utils/localStorage";
import UserNameInput from "./UserNameInput";
import GreetingMessage from "./GreetingMessage";

export default function Greeting() {
  const [userName, setUserName] = useState("");
  const [isNameChanging, setIsNameChanging] = useState(true);

  useEffect(() => {
    setUserName(getItem("userName", ""));
    userName && setIsNameChanging(false);
  }, [userName]);

  const handleSubmit = (userName: string) => {
    setUserName(userName);
    setIsNameChanging(false);
    setItem("userName", userName);
  };
  const handleButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    setIsNameChanging(true);
  };

  return (
    <>
      <GreetingMessage userName={userName}></GreetingMessage>
      {isNameChanging && (
        <UserNameInput onSubmit={handleSubmit}></UserNameInput>
      )}
      {!isNameChanging && (
        <button onClick={handleButtonClick}>이름 변경</button>
      )}
    </>
  );
}
