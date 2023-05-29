import { useEffect, useState } from "react";
import styled from "styled-components";

const addZero = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

const ClockContainer = styled.div`
  font-size: 7em;
  user-select: none;
`;

export default function Clock() {
  const [dateNow, setDateNow] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setDateNow(today);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContainer>
      {dateNow &&
        `${addZero(dateNow.getHours())}:${addZero(dateNow.getMinutes())}`}
    </ClockContainer>
  );
}
