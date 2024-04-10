import { useEffect } from "react";
import { SERVER } from "../../network/config";
import { useRecoilState } from "recoil";
import { userNameState, userAccessToken } from "../../store/recoil";
import { useNavigate } from "react-router-dom";

// 배포 테스트

export const AuthRedirect = () => {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");
  const [userName, setUserName] = useRecoilState(userNameState);
  const [accesstoken, setAccessToken] = useRecoilState(userAccessToken);

  useEffect(() => {
    fetch(`${SERVER}/auth/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.accessToken);
        setUserName(data.name);
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div>로그인 중 입니다</div>;
};
