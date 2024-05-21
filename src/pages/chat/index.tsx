import styled from "styled-components";
import { DefaultLayout } from "../../layout/defaultLayout";
import { Text } from "../../components/common";
import { palette } from "../../styles";
import { Chatting } from "./chatting";
import { InputType, TextFields } from "../../components/textFields";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isChatPageActive } from "../../store/recoil";
import { Welly } from "../../assets/Icons/characters/Welly";

export const ChatPage = () => {
  const setIsActive = useSetRecoilState(isChatPageActive);

  useEffect(() => {
    // 페이지에 들어올 때
    setIsActive(true);

    // 페이지를 나갈 때
    return () => setIsActive(false);
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <TitleContainer>
          {/* 아이콘 들어갈 자리 */}
          <Welly width={41} height={41} />
          <div className="text_container">
            <Text $Typo="Title1" $paletteColor="Gray8">
              웰리’s Pick!
            </Text>
            <Text $Typo="SubTitle2" $paletteColor="Gray8">
              웰리가 식단과 음식을 추천해드릴게요
            </Text>
          </div>
        </TitleContainer>
        <Chatting />
      </Container>
      <TextFieldsContainer>
        <TextFields type={InputType.ChatInput} />
      </TextFieldsContainer>
    </DefaultLayout>
  );
};

const Container = styled.div`
  width: 100%;
  background: url("/bg/chat_bg.png");
  background-size: cover; /* 배경 이미지를 꽉 차게 */
  background-position: center; /* 이미지 중앙에 위치 */
  padding: 0 20px;
  box-sizing: border-box;
`;
const TitleContainer = styled.div`
  width: 100%;
  padding: 30px 0 20px 0;
  border-bottom: 1px solid ${palette.Main_orange};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .text_container {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
const TextFieldsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
`;
