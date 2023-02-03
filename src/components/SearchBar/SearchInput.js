import { useRef, useState } from "react";
import styled from "styled-components";

export default function SearchInput() {
  const [searchEngine, setSearchEngine] = useState("Google");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchEngine === "Google") {
      window.open(`https://www.google.com/search?q=${searchText}`);
    } else if (searchEngine === "DuckDuckGo") {
      window.open(`https://duckduckgo.com/?q=${searchText}`);
    } else if (searchEngine === "Naver") {
      window.open(
        `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchText}`
      );
    }
    setSearchText("");
  };

  const handleChange = (ev) => {
    setSearchText(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={searchEngine}
        value={searchText}
        onChange={handleChange}
      ></input>
    </form>
  );
}
