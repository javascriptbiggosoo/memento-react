import styled from "styled-components";

const Container = styled.div`
  font-size: 4em;
  user-select: none;
`;

export default function GreetingMessage({ userName }: { userName: string }) {
  return <Container>안녕하세요{userName && ` ${userName}님`}!</Container>;
}
