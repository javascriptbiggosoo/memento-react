import { useState } from "react";
import styled from "styled-components";

export default function SearchInput() {
  const [searchEngine, setSearchEngine] = useState("Google");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let searchValue = event.target.value;
      if (searchEngine === "Google") {
        window.open(`https://www.google.com/search?q=${searchValue}`);
      } else if (searchEngine === "DuckDuckGo") {
        window.open(`https://duckduckgo.com/?q=${searchValue}`);
      } else if (searchEngine === "Naver") {
        window.open(
          `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchValue}`
        );
      }
      searchValue = "";
    }
  };

  return <input onKeyDown={handleKeyDown} placeHolder={searchEngine}></input>;
}
