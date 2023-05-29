import styled from "styled-components";

const Div = styled.div`
  font-size: 4em;
`;

export default function GreetingMessage({ userName }) {
  return <Div>안녕하세요{userName && ` ${userName}님`}!</Div>;
}
