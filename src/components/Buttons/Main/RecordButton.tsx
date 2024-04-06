import styled from "styled-components";
import { theme } from "../../../styles";
import { Text } from "../../common";
import { PlusIcon } from "../../../assets/Icons";
import { CheckButton } from "../CheckButton";
import { Link } from "react-router-dom";

type displayType = {
  display: boolean;
};

export const RecordButton = ({ link }: { link: string }) => {
  return (
    <Container to={link}>
      <CheckButton type="plus" />
      <Text $paletteColor="Gray5" $Typo="Body1">
        기록하기
      </Text>
    </Container>
  );
};

export const RecordStress = (display: { display: boolean }) => {
  return (
    <StressContainer display={display}>
      <Text $Typo="Body4" $paletteColor="Gray7">
        오늘의 스트레스 정도는?
      </Text>
      <div className="icon-container">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </StressContainer>
  );
};

const Container = styled(Link)`
  width: 100%;
  background: ${theme.palette.White};
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
`;

const StressContainer = styled.div<{ display: displayType }>`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  padding: 10px 15px;
  display: ${({ display }) => (display.display ? "block" : "none")};

  .icon-container {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
  }
`;

const Icon = styled.div`
  width: 44px;
  height: 44px;
  background: pink;
`;
