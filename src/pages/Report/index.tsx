import { styled } from "styled-components";
import { Column, Row, theme } from "../../styles";
import { Text } from "../../components/common";
import { ColorType, HashtagChips } from "../../components/chips";
import { useState } from "react";
import { DefaultLayout } from "../../layout/defaultLayout";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DropdownCalendar } from "../../components/calendar/DropdownCalendar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

export const data = {
  labels,
  datasets: [
    {
      label: "배변 점수",
      data: [32, 42, 51, 60, 51, 95, 97],
      backgroundColor: "#FC843E",
      borderColor: "#FC843E",
      borderWidth: 1,
      pointRadius: 1.5,
    },
    {
      label: "스트레스",
      data: [37, 42, 41, 37, 31, 44, 42],
      backgroundColor: "#4FB2FA",
      borderColor: "#4FB2FA",
      borderWidth: 1,
      pointRadius: 1.5,
    },
  ],
};

const options: any = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      ticks: {
        color: "#353432",
        font: {
          size: 10,
          // weight: "bold",
        },
      },
      beginAtZero: true,
    },
    y: {
      ticks: {
        color: "#353432",
        font: {
          size: 10,
          // weight: "bold",
        },
      },
      beginAtZero: true,
    },
  },

  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 25,
        boxHeight: 4,
        padding: 10,
        color: "#353432",
        font: {
          size: 10,
          family: "Pretendard",
        },
      },
    },
  },
};

export const BestFood = [
  {
    food: "두부",
    description:
      "낮은 포드맵 함량으로 소화에 부담을 덜 주면서도 좋은 단백질과 식이섬유를 제공하여 장 건강을 지원합니다.",
  },
  {
    food: "시금치",
    description: "낮은 포드맵 함량으로 소화에 부담을 지원합니다.",
  },
  {
    food: "두부",
    description: "낮은 포드맵유를 제공하여 장 건강을 지원합니다.",
  },
  {
    food: "두부",
    description: "낮은 니다.",
  },
  {
    food: "두부",
    description: "낮은 니다.",
  },
];

export const Report = () => {
  const [menuIndex, setMenuIndex] = useState(1);

  return (
    <DefaultLayout>
      <Container>
        <TopContainer gap={30}>
          <DropdownCalendar />
          <Column gap={15}>
            <Text $Typo="Title2" $paletteColor="Gray9">
              이번주 총평 및 피드백
            </Text>
            <FeedbackBox>
              <Text $Typo="Body3" $paletteColor="Gray9">
                배변 점수는 수요일, 목요일에 높은 점수를 기록했습니다. 다만,
                금요일부터 주말까지 배변 점수가 낮아지는 경향이 있으며, 이는
                금요일과 주말에 섭취한 고포드맵 식품의 영향일 수 있습니다. 특히
                이 기간동안 밀가루와 나트륨을 많이 섭취하였기에 밀가루 음식을
                쌀로 대체하고, 나트륨이 많이 함유된 음식 등은 순수 단백질로
                구성된 두부, 닭가슴살 등으로 대체하는 것이 좋습니다. 유지방이
                많이 함유된 요거트 역시 고포드맵 음식으로, 저지방 요거트로
                대체하면 도움이 될 것 입니다.스트레스 지수는 상대적으로 높게
                유지되고 있습니다. 스트레스는 소화기 건강에 부정적인 영향을
                미치므로 저포드맵 식단을 지속적으로 유지하면서 스트레스 관리
                방법을 찾는 것이 좋습니다. 또한 주말에 식단 관리에 더 주의를
                기울이고, 식후 증상을 주의 깊게 모니터링하여 식단을 조절하는
                것이 도움이 될 것입니다.
              </Text>
            </FeedbackBox>
          </Column>
        </TopContainer>
        <BottomContainer gap={20} menuIndex={menuIndex}>
          <Row gap={7}>
            <HashtagChips
              color={menuIndex === 1 ? ColorType.MainOrange : ColorType.Gray}
              onClick={() => setMenuIndex(1)}
            >
              식단
            </HashtagChips>
            <HashtagChips
              color={menuIndex === 2 ? ColorType.MainOrange : ColorType.Gray}
              onClick={() => setMenuIndex(2)}
            >
              배변/스트레스
            </HashtagChips>
          </Row>
          {menuIndex === 1 ? (
            <>
              <Column gap={13}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  이번주 Best 5 음식
                </Text>
                <FoodBoxContainer gap={10}>
                  {BestFood.map((food) => (
                    <FoodBox gap={7}>
                      <Text $Typo="SubTitle1" $paletteColor="Gray9">
                        {food.food}
                      </Text>
                      <Text $Typo="Body1" $paletteColor="Gray7">
                        {food.description}
                      </Text>
                    </FoodBox>
                  ))}
                </FoodBoxContainer>
              </Column>

              <Column gap={13}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  이번주 Worst 5 음식
                </Text>
                <FoodBoxContainer gap={10}>
                  {BestFood.map((food) => (
                    <FoodBox gap={7}>
                      <Text $Typo="SubTitle1" $paletteColor="Gray9">
                        {food.food}
                      </Text>
                      <Text $Typo="Body1" $paletteColor="Gray7">
                        {food.description}
                      </Text>
                    </FoodBox>
                  ))}
                </FoodBoxContainer>
              </Column>
            </>
          ) : (
            <Column gap={23}>
              <Column gap={10}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  배변 & 스트레스 분석 그래프
                </Text>
                <Line data={data} options={options} />
              </Column>

              <Column gap={14}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  배변 분석
                </Text>

                <AnalysisBox>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                </AnalysisBox>
              </Column>

              <Column gap={14}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  스트레스 분석
                </Text>
                <AnalysisBox>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                  <Row>
                    <Text $Typo="Body3" $paletteColor="Gray9">
                      이번주는 배변 점수가 &nbsp;
                    </Text>
                    <Text $Typo="Body4" $paletteColor="Gray9">
                      좋아요.
                    </Text>
                  </Row>
                </AnalysisBox>
              </Column>
            </Column>
          )}
        </BottomContainer>
      </Container>
    </DefaultLayout>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 0 90px 0;
`;
const TopContainer = styled(Column)`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px 30px 20px;
  background: ${theme.palette.BG_orange};
  border-bottom: 1px solid ${theme.palette.Gray3};
`;
const FeedbackBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${theme.palette.White};
  border-radius: 8px;
  border: 1px solid ${theme.palette.Gray3};
  padding: 15px;
`;
const BottomContainer = styled(Column)<{ menuIndex: number }>`
  padding: ${({ menuIndex }) =>
    menuIndex === 1 ? "20px 0 20px 20px" : "20px"};
  width: ${({ menuIndex }) =>
    menuIndex === 1 ? "calc(100vw - 20px)" : "100%"};
  box-sizing: ${({ menuIndex }) => (menuIndex === 1 ? "" : "border-box")};
`;
const FoodBoxContainer = styled(Row)`
  flex-wrap: nowrap; // 자식 요소들이 줄바꿈되지 않도록 설정
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const FoodBox = styled(Column)`
  flex-shrink: 0; // flex 아이템이 축소되지 않도록 설정
  width: 144px;
  min-height: 150px;
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 10px;
  padding: 14px 18px;
  box-sizing: border-box;
`;
const AnalysisBox = styled(Column)`
  width: 100%;
  height: 100%;
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 10px;
  padding: 14px;
  box-sizing: border-box;
`;
