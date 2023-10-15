import styled from "styled-components";

import SearchBar from "../SearchBar";
import Weather from "../Weather/Index";

const TopContainer = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
`;

export default function Top() {
  return (
    <TopContainer>
      <SearchBar />
      <Weather />
    </TopContainer>
  );
}
