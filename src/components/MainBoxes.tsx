import { styled } from "styled-components";
import { Column, Row, theme } from "../styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Text } from "./common";
import { StatusChips, StatusType } from "./Chips";
import React from "react";

interface GraphLabelInterface {
  children: React.ReactNode;
  percentage: number;
  color: string;
}

const data = {
  labels: ["저포드맵", "고포드맵"],
  datasets: [
    {
      label: "test",
      data: [60, 40],
      backgroundColor: ["#FC843E", "#FFDBC5"],
      cutout: "70%",
    },
  ],
};
const options: any = {
  responsive: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutGraphLabel = ({
  children,
  percentage,
  color,
}: GraphLabelInterface) => {
  return (
    <LabelContainer>
      <LabelBox color={color} />
      <Text $Typo="Body4" $paletteColor="Gray8">
        {children}
      </Text>
      <Text $Typo="Body4" $paletteColor="Main_orange">
        {percentage}
      </Text>
    </LabelContainer>
  );
};

export const MainGraphBox = () => {
  return (
    <Container>
      <GraphContainer>
        <Doughnut data={data} options={options} width={112} height={112} />
      </GraphContainer>

      <Column gap={16}>
        <Column gap={3}>
          <Text $Typo="SubTitle1">드림님의 오늘 식단은</Text>
          <Row>
            <StatusChips statusType={StatusType.Good} />
            <Text $Typo="SubTitle1"> &nbsp;입니다!</Text>
          </Row>
        </Column>

        <Column>
          <DoughnutGraphLabel percentage={60} color={theme.palette.Main_orange}>
            저포드맵
          </DoughnutGraphLabel>
          <DoughnutGraphLabel percentage={40} color={theme.palette.Sub3_orange}>
            고포드맵
          </DoughnutGraphLabel>
        </Column>
      </Column>
    </Container>
  );
};

const Container = styled.div<{ padding?: string }>`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "16px 22px")};
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  display: flex;
  gap: 8%;
`;

const GraphContainer = styled.div`
  width: 112px;
  height: 112px;
  overflow: hidden; /* 내용이 넘치는 경우 숨김 처리 */
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LabelBox = styled.div<{ color?: string }>`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background: ${({ color }) => (color ? color : theme.palette.Black)};
`;
