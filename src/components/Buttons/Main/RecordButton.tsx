import styled from "styled-components";
import { theme } from "../../../styles";
import { Text } from "../../common";
import { PlusIcon } from "../../../assets/Icons";

export const RecordButton = () => {
  return (
    <Container>
      <PlusIcon />
      <Text $paletteColor="Gray5" $Typo="Body1">
        기록하기
      </Text>
    </Container>
  );
};

export const RecordStress = () => {
  return (
    <StressContainer>
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

const Container = styled.div`
  width: 100%;
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StressContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  border: 1px solid ${theme.palette.Gray3};
  border-radius: 8px;
  padding: 10px 15px;

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
