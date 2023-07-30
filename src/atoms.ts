import { atom } from "recoil";
import { IToDo } from "./components/ToDo/types";

export const toDoState = atom<IToDo[]>({
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
