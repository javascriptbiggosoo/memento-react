import { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  font-size: 11em;
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

  const addZero = (num) => {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  };

  return (
    <ClockContainer>
      {dateNow &&
        `${addZero(dateNow.getHours())}:${addZero(dateNow.getMinutes())}`}
    </ClockContainer>
  );
}
