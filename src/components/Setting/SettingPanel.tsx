import React from "react";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";

import { Overlay } from "../UI/Overlay";
import { searchEngineState } from "../../atoms";

const Modal = styled(motion.div)`
  background-color: rgba(225, 225, 225, 1);
  border-radius: 40px;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface IProps {
  onHideOverlay: () => void;
}

export default function SettingPanel({ onHideOverlay }: IProps) {
  const [searchEngine, setSearchEngine] = useRecoilState(searchEngineState);

  const handleOptionClick = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(ev.currentTarget.value);
    setSearchEngine(ev.currentTarget.value);
  };

  return (
    <Overlay hideOverlay={onHideOverlay}>
      <Modal
        onClick={(ev) => ev.stopPropagation()}
        style={{
          width: 400,
          height: 500,
        }}
      >
        <ul>
          <li>
            검색 엔진:
            <select name="searchEngine" onChange={handleOptionClick}>
              {["Naver", "Google", "Bing", "DuckDuckGo"].map((engine, idx) => (
                <option
                  value={engine}
                  key={idx}
                  disabled={searchEngine === engine}
                >
                  {engine}
                </option>
              ))}
            </select>
          </li>
          {/* <li>
        사용자명 변경:
        <input
          style={{ backgroundColor: "grey" }}
          type="text"
          placeholder="이름을 입력해주세요
      "
        />
      </li> */}
        </ul>
        <button onClick={onHideOverlay}>닫기</button>
      </Modal>
    </Overlay>
  );
}
