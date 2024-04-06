import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { formatDate } from "../components/calendar/MonthlyCalendar";

const { persistAtom } = recoilPersist({
  key: "localStorage", // 고유한 key 값
  storage: localStorage,
});

export const userNameState = atom<string>({
  key: "userName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userAccessToken = atom<string>({
  key: "userAccessToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const selectDate = atom<string>({
  key: "selectDate",
  default: formatDate(new Date()),
});

export const stressLevel = atom<number>({
  key: "stressLevel",
  default: 0,
});
