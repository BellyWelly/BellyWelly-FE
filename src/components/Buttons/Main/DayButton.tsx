import { styled } from "styled-components";
import { Text } from "../../common";
import { theme } from "../../../styles";

export interface WeekInterface {
  day: string;
  date: string;
  active?: boolean;
  onClick?: any;
}

export const DayButton = ({ day, date, active, onClick }: WeekInterface) => {
  return (
    <Container active={active} onClick={onClick}>
      <Text $Typo="Body1" $paletteColor={active ? "Black" : "Gray4"}>
        {day}
      </Text>
      <Text $Typo="SubTitle1" $paletteColor={active ? "Black" : "Gray4"}>
        {date}
      </Text>
      <IconContainer>
        <Icon />
      </IconContainer>
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
const Icon = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: pink;
`;
