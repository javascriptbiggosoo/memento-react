import { useState } from "react";
import { useRecoilState } from "recoil";

import { searchEngineState } from "../../atoms";

export default function SearchInput() {
  const [searchEngine, setSearchEngine] = useRecoilState(searchEngineState);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (searchEngine === "Google") {
      window.open(`https://www.google.com/search?q=${searchText}`);
    } else if (searchEngine === "DuckDuckGo") {
      window.open(`https://duckduckgo.com/?q=${searchText}`);
    } else if (searchEngine === "Naver") {
      window.open(
        `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${searchText}`
      );
    } else if (searchEngine === "Bing") {
      window.open(`https://www.bing.com/search?q=${searchText}`);
    }
    setSearchText("");
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
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
