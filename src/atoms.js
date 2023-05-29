import { atom } from "recoil";

export const toDoState = atom({
  key: "toDoState", // 유니크 id
  default: [], // state 기본값
});