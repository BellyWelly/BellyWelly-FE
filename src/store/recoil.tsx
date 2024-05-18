import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { formatDate } from "../components/calendar/MonthlyCalendar";
import { FoodLabelsAnalysisResultInterface } from "../pages/Record";
import { messageInterface, messages } from "./messages";

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

export const foodAIDetectionLabels = atom<string[]>({
  key: "foodAIDetectionLabels",
  default: [],
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
        fructose: {
          value: 0,
          graph: 0,
        },
        sucrose: {
          value: 0,
          graph: 0,
        },
        lactose: {
          value: 0,
          graph: 0,
        },
        maltose: {
          value: 0,
          graph: 0,
        },
        fiber: {
          value: 0,
          graph: 0,
        },
      },
    },
  }
);

export const chatList = atom<messageInterface[]>({
  key: "chatList",
  default: messages,
});

export const isChatPageActive = atom<boolean>({
  key: "isChatPageActive",
  default: false,
});

export const isChooseFoodActive = atom<boolean>({
  key: "isChooseFoodActive",
  default: false,
});
