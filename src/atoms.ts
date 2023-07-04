import { atom } from "recoil";

export const toDoState = atom({
  key: "toDoState", // 유니크 id
  default: [], // state 기본값
});

export const userNameState = atom<string>({
  key: "userNameState",
  default: "",
});

export const searchEngineState = atom<string>({
  key: "searchEngineState",
  default: "Naver",
});
