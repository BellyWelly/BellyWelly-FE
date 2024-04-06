import { PoopType1, PoopType2, PoopType3, PoopType4 } from "../Icons";

export interface PoopTypesInterface {
  id: number;
  description: string;
  icon: React.ReactElement;
}

export const PoopTypes: PoopTypesInterface[] = [
  {
    id: 1,
    description: "촉촉한 변",
    icon: <PoopType1 width={50} height={34} />,
  },
  {
    id: 2,
    description: "딱딱한 변",
    icon: <PoopType2 width={50} height={34} />,
  },
  {
    id: 3,
    description: "갈라진 변",
    icon: <PoopType3 width={50} height={34} />,
  },
  {
    id: 4,
    description: "묽은 변",
    icon: <PoopType4 width={50} height={34} />,
  },
];

export const FastOption = [
  { level: 1, text: "급하지않음" },
  { level: 2, text: "" },
  { level: 3, text: "" },
  { level: 4, text: "" },
  { level: 5, text: "급함" },
];

export const PoopColors = [
  { colorName: "brown", color: "#8D6736" },
  { colorName: "yellow", color: "#D9B45C" },
  { colorName: "red", color: "#CA4223" },
  { colorName: "black", color: "#4B4746" },
  { colorName: "green", color: "#256C25" },
];

export const SatisfiedOption = [
  { level: 1, text: "별로예요" },
  { level: 2, text: "" },
  { level: 3, text: "" },
  { level: 4, text: "" },
  { level: 5, text: "좋아요" },
];
export const PoopTiems = ["~5분", "5분~10분", "10분~15분", "15분~"];
