import { styled } from "styled-components";
import { Row, theme } from "../../../styles";
import { Text } from "../../../components/common";
import { FoodListByFodmap, NutrientBox } from "../../../components/record";
import { StatusType } from "../../../components/chips";
import { BigButtons } from "../../../components/Buttons";

export const FoodRecordResult = () => {
  const foodList = [
    {
      fodmap: "저포드맵",
      foodList: ["시금치", "시금치", "고사리", "순두부찌개"],
      status: StatusType.Low_Fodmap,
    },
    {
      fodmap: "고포드맵",
      foodList: ["시금치", "시금치", "고사리", "순두부찌개"],
      status: StatusType.High_Fodmap,
    },
  ];
  const nutrientLsit = [
    { nutrient: "탄수화물", rate: 80 },
    { nutrient: "단백질", rate: 40 },
    { nutrient: "지방", rate: 65 },
  ];

  return (
    <Container>
      <Text $Typo="Title1" $paletteColor="Gray6">
        분석 결과
      </Text>
      <Row gap={8}>
        {foodList.map((food) => (
          <FoodListByFodmap
            key={food.status}
            statusType={food.status}
            foodList={food.foodList}
          />
        ))}
      </Row>
      <NutrientBox nutrientList={nutrientLsit} />

      <div className="button">
        <BigButtons active={true}>저장하기</BigButtons>
      </div>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${theme.palette.BG_orange};
  border-top: 0.5px solid ${theme.palette.Gray4};
  display: flex;
  flex-direction: column;
  padding: 22px 3%;
  gap: 19px;

  .button {
    margin-top: 34px;
  }
`;
