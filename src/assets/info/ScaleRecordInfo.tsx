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
    description: "물 같은 변",
    icon: <PoopType4 width={50} height={34} />,
  },
];

export const PoopColors = [
  { colorName: "brown", color: "#8D6736" },
  { colorName: "yellow", color: "#D9B45C" },
  { colorName: "red", color: "#CA4223" },
  { colorName: "gray", color: "#4B4746" },
  { colorName: "green", color: "#256C25" },
];
