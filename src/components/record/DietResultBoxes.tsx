import { styled } from "styled-components";
import { Column, theme } from "../../styles";
import { Text } from "../common";
import { StatusChips, StatusType } from "../chips";
import { NutrientRateBar } from "./NutrientRateBar";

interface FoodListByFodmapInterface {
  statusType: StatusType;
  foodList: string[];
}
interface ContainerInterface {
  padding?: string;
  alignItems?: string;
}
interface NutrientBoxProps {
  nutrientList: { [key: string]: { value: number; graph: number } };
}

export const FoodListByFodmap = ({
  statusType,
  foodList,
}: FoodListByFodmapInterface) => {
  return (
    <Container alignItems="center">
      <StatusChips statusType={statusType} />
      <Column gap={7} alignItems="center">
        {foodList.map((food) => (
          <Text key={food} $Typo="Body3" $paletteColor="Gray6">
            {food}
          </Text>
        ))}
      </Column>
    </Container>
  );
};

const getNutrientName = (nutrient: string): string => {
  const nutrientNames: { [key: string]: string } = {
    fructose: "과당",
    sucrose: "자당",
    lactose: "유당",
    maltose: "맥아당",
    fiber: "식이섬유",
  };
  return nutrientNames[nutrient] || "식이섬유"; // 매핑되지 않은 경우 기본값
};

export const NutrientBox = ({ nutrientList }: NutrientBoxProps) => {
  return (
    <Container padding="16px 17px 26px 17px">
      <Text $Typo="Body4" $paletteColor="Gray6">
        영양 성분 계산 (1회 제공량 기준)
      </Text>
      {Object.entries(nutrientList).map(([nutrient, value]) => (
        <NutrientRateBar key={nutrient} value={value}>
          {getNutrientName(nutrient)}
        </NutrientRateBar>
      ))}
    </Container>
  );
};

const Container = styled.div<ContainerInterface>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  background: ${theme.palette.White};
  border-radius: 6px;
  border: 1px solid ${theme.palette.Gray3};
  gap: 15px;
  padding: ${({ padding }) => (padding ? padding : "14px 0")};
`;
