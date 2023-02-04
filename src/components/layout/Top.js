import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";

const TopContainer = styled.header`
  display: flex;

  justify-content: space-between;
  width: 100%;
`;

export default function Top() {
  return (
    <TopContainer>
      <SearchBar></SearchBar>
      <Weather></Weather>
    </TopContainer>
  );
}
