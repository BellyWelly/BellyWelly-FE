import { styled } from "styled-components";
import { Text } from "../common";
import { KakaoLoginIcon } from "../../assets/Icons";
import { Row } from "../../styles";

export const KakaoLoginButton = () => {
  const rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Container
      alignItems="center"
      justifyContent="center"
      gap={10}
      onClick={() => kakaoLogin()}
    >
      <KakaoLoginIcon />
      <Text $Typo="SubTitle1" $paletteColor="Black">
        카카오 로그인
      </Text>
    </Container>
  );
};

const Container = styled(Row)`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px;
  background: #fee500;
  border-radius: 12px;
`;
