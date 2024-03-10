import { atom } from "recoil";

export const userNameState = atom<string>({
  key: "userName",
  default: "",
});
