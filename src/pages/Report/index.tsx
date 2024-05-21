import { styled } from "styled-components";
import { Column, Row, theme } from "../../styles";
import { Text } from "../../components/common";
import { useEffect, useState } from "react";
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
import { MonthlyCalendar } from "../../components/calendar/MonthlyCalendar";
import { ColorType, HashtagChips } from "../../components/chips";
import { selectDate, userAccessToken } from "../../store/recoil";
import { useRecoilValue } from "recoil";
import { SERVER } from "../../network/config";
import { getDateInfo } from "../../utils/DateUtils";
import React from "react";

interface Week {
  year: number;
  month: number;
  week: number;
}
interface Meal {
  mealName: string;
  description: string;
}
interface FoodReportInterface {
  week: Week;
  feedback: string;
  best: Meal[];
  worst: Meal[];
}
interface GraphData {
  defecation: number[];
  stress: number[];
}
interface OtherReportInterface {
  week: Week;
  feedback: string;
  graphDto: GraphData;
  defecationAnalysis: string;
  stressAnalysis: string;
}

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
        },
      },
      beginAtZero: true,
    },
    y: {
      ticks: {
        color: "#353432",
        font: {
          size: 10,
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

export const Report = () => {
  const [menuIndex, setMenuIndex] = useState(1);
  const [foodReport, setFoodReport] = useState<FoodReportInterface>();
  const [otherReport, setOtherReport] = useState<OtherReportInterface>();
  const accessToken = useRecoilValue(userAccessToken);
  const selectedDate = useRecoilValue(selectDate);

  const { year, month, week } = getDateInfo(selectedDate);

  const data = {
    labels,
    datasets: [
      {
        label: "배변 점수",
        data: otherReport?.graphDto?.defecation ?? [],
        backgroundColor: "#FC843E",
        borderColor: "#FC843E",
        borderWidth: 1,
        pointRadius: 1.5,
      },
      {
        label: "스트레스",
        data: otherReport?.graphDto?.stress ?? [],
        backgroundColor: "#4FB2FA",
        borderColor: "#4FB2FA",
        borderWidth: 1,
        pointRadius: 1.5,
      },
    ],
  };

  useEffect(() => {
    let section: string = "diet";
    if (menuIndex === 1) section = "diet";
    else section = "defecation";

    fetch(
      `${SERVER}/reports/${section}?year=${year}&month=${month}&week=${week}`,
      {
        method: "get",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (menuIndex === 1) setFoodReport(res);
        else setOtherReport(res);
      })
      .catch(() => {
        if (menuIndex === 1)
          setFoodReport({
            week: {
              year: year,
              month: month,
              week: week,
            },
            feedback: "데이터가 없습니다",
            best: [],
            worst: [],
          });
        else
          setOtherReport({
            week: {
              year: year,
              month: month,
              week: week,
            },
            feedback: "데이터가 없습니다",
            graphDto: {
              defecation: [],
              stress: [],
            },
            defecationAnalysis: "",
            stressAnalysis: "",
          });
      });
  }, [menuIndex, selectedDate]);

  return (
    <DefaultLayout>
      <Container>
        <TopContainer gap={30}>
          <MonthlyCalendar />
          <Column gap={15}>
            <Text $Typo="Title2" $paletteColor="Gray9">
              {year}년 {month}월 {week}주차 총평 및 피드백
            </Text>
            <FeedbackBox>
              <Text $Typo="Body3" $paletteColor="Gray9">
                {foodReport?.feedback
                  ?.split(/(?:\r\n|\r|\n)/g)
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
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
                  {year}년 {month}월 {week}주차 Best 5 음식
                </Text>
                <FoodBoxContainer gap={10}>
                  {foodReport?.best?.map((food) => (
                    <FoodBox gap={7}>
                      <Text $Typo="SubTitle1" $paletteColor="Gray9">
                        {food.mealName}
                      </Text>
                      <Text $Typo="Body1" $paletteColor="Gray7">
                        {food.description}
                      </Text>
                    </FoodBox>
                  )) ?? <span>데이터가 없습니다</span>}
                </FoodBoxContainer>
              </Column>

              <Column gap={13}>
                <Text $Typo="Title2" $paletteColor="Gray9">
                  {year}년 {month}월 {week}주차 Worst 5 음식
                </Text>
                <FoodBoxContainer gap={10}>
                  {foodReport?.worst?.map((food) => (
                    <FoodBox gap={7}>
                      <Text $Typo="SubTitle1" $paletteColor="Gray9">
                        {food.mealName}
                      </Text>
                      <Text $Typo="Body1" $paletteColor="Gray7">
                        {food.description}
                      </Text>
                    </FoodBox>
                  )) ?? <span>데이터가 없습니다</span>}
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
                    <Text
                      $Typo="Body3"
                      $paletteColor="Gray9"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {otherReport?.defecationAnalysis
                        ?.split(/(?:\r\n|\r|\n)/g)
                        .map((line: any, index: number) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        )) ?? <span>데이터가 없습니다</span>}
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
                    <Text
                      $Typo="Body3"
                      $paletteColor="Gray9"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {otherReport?.stressAnalysis
                        ?.split(/(?:\r\n|\r|\n)/g)
                        .map((line: any, index: number) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        )) ?? <span>데이터가 없습니다</span>}
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
