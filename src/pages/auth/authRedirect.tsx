import { useEffect } from "react";
import { SERVER } from "../../network/config";
import { useRecoilState } from "recoil";
import { userNameState } from "../../store/recoil";
import { useNavigate } from "react-router-dom";

export const AuthRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const [userName, setUserName] = useRecoilState(userNameState);

  useEffect(() => {
    fetch(`${SERVER}/auth/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.accessToken);
        setUserName(data.name);
        navigate("/");
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return <div>로그인 중 입니다</div>;
};
