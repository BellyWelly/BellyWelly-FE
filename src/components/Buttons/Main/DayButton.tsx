import styled from "styled-components"; // 임포트 구문 수정
import { Text } from "../../common";
import { Img, ImgContainer, theme } from "../../../styles";

export interface WeekInterface {
  active: boolean;
  weekDates: {
    dayOfWeek: string;
    date: string;
  };
  stressLevel: number;
  onClick: () => void;
  toggleOpenStress: () => void;
}

export const DayButton = ({
  weekDates,
  active,
  stressLevel,
  onClick,
  toggleOpenStress,
}: WeekInterface) => {
  return (
    <Container active={active} onClick={onClick}>
      <Text $Typo="Body1" $paletteColor={active ? "Black" : "Gray4"}>
        {weekDates?.dayOfWeek[0]}
      </Text>
      <Text $Typo="SubTitle1" $paletteColor={active ? "Black" : "Gray4"}>
        {weekDates.date.slice(-2)}
      </Text>
      {/* <IconContainer onClick={() => active && toggleOpenStress()}> */}
      <ImgContainer
        width={30}
        height={30}
        onClick={() => active && toggleOpenStress()}
      >
        <Img src={`/bellyFaces/level${stressLevel ? stressLevel : "0"}.png`} />
      </ImgContainer>
      {/* </IconContainer> */}
    </Container>
  );
};

const Container = styled.div<{ active?: boolean }>`
  width: calc(100% / 7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: ${({ active }) =>
    active ? theme.palette.Sub3_orange : theme.palette.White};
  gap: 5px;
  border-radius: 100px;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 30px;
`;
