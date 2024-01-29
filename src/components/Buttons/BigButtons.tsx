import { styled } from "styled-components";
import { theme } from "../../styles";
import { Text } from "../common";

export const BigButtons = ({
  enable,
  children,
}: {
  enable: boolean;
  children: React.ReactNode;
}) => {
  // 구조 분해 할당 사용
  return (
    <Container enable={enable}>
      <Text $Typo="SubTitle1" $paletteColor="White">
        {children}
      </Text>
    </Container>
  );
};

const Container = styled.div<{ enable: boolean }>`
  // Props 타입 수정
  width: 100%;
  height: 54px;
  background: ${({ enable }) =>
    enable ? theme.palette.Main_orange : theme.palette.Gray4};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;
