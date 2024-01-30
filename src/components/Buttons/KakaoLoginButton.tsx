import { styled } from "styled-components";
import { Text } from "../common";
import { KakaoLoginIcon } from "../../assets/Icons";

export const KakaoLoginButton = () => {
  return (
    <Container>
      <KakaoLoginIcon />
      <SubContainer>
        <Text $Typo="SubTitle1" $paletteColor="Black">
          카카오 로그인
        </Text>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: #fee500;
  border-radius: 12px;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
