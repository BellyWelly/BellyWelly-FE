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
interface NutrientListInterface {
  nutrient: string;
  rate: number;
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

export const NutrientBox = ({
  nutrientList,
}: {
  nutrientList: NutrientListInterface[];
}) => {
  return (
    <Container padding="16px 17px 26px 17px">
      <Text $Typo="Body4" $paletteColor="Gray6">
        영양 성분 계산 ( % 일 섭취량)
      </Text>
      {nutrientList.map((item) => (
        <NutrientRateBar key={item.nutrient} rate={item.rate}>
          {item.nutrient}
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
  justify-content: center;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  background: ${theme.palette.White};
  border-radius: 6px;
  border: 1px solid ${theme.palette.Gray3};
  gap: 15px;
  padding: ${({ padding }) => (padding ? padding : "14px 0")};
`;
