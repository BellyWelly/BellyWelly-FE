import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { formatDate } from "../components/calendar/MonthlyCalendar";
import { FoodLabelsAnalysisResultInterface } from "../pages/Record";

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

export const foodLabelsAnalysisResult = atom<FoodLabelsAnalysisResultInterface>(
  {
    key: "foodLabelsAnalysisResult",
    default: {
      image: "",
      mealtime: "",
      meal: [],
      fodmapList: {
        lowFodmap: [],
        highFodmap: [],
      },
      nutrient: {
        fructose: 0,
        sucrose: 0,
        lactose: 0,
        maltose: 0,
        fiber: 0,
      },
    },
  }
);
