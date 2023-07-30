import { useEffect, useState } from "react";
import styled from "styled-components";

const 십의자리0채우기 = (num: number) => {
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
  const [dateNow, setDateNow] = useState<null | Date>(null);
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
        `${십의자리0채우기(dateNow.getHours())}:${십의자리0채우기(
          dateNow.getMinutes()
        )}`}
    </ClockContainer>
  );
}
