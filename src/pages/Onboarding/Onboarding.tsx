import { styled } from "styled-components";
import { Text } from "../../components/common";
import { KakaoLoginButton } from "../../components/Buttons";
import { MainIcon } from "../../components/MainCharacter";

export const Onboarding = () => {
  return (
    <Container>
      <div className="sub-container">
        <div className="title-container">
          <Text $Typo="Head2" $paletteColor="Gray7">
            장 건강 고민 끝 <br /> 벨리웰리에 오신 것을 <br />
            환영합니다!
          </Text>
          <Text $Typo="Body3" $paletteColor="Gray7">
            카카오톡으로 간편하게 시작해보세요
          </Text>
        </div>
        <IconContainer>
          <MainIcon width={252} />
        </IconContainer>
        <KakaoLoginButton />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 3%;

  .sub-container {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 37px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
