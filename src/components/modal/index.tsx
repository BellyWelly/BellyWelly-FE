import ReactModal from "react-modal";
import { theme } from "../../styles";
import { useState } from "react";
import styled from "styled-components";
import { Text } from "../common";
import { useRecoilValue } from "recoil";
import { userNameState } from "../../store/recoil";
import { InputType, TextFields } from "../textFields";
import { ColorType, HashtagChips } from "../chips";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const userName = useRecoilValue(userNameState);

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {
          position: "fixed",
          background: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "auto",
          width: "70%",
          height: "40%",
          background: theme.palette.White,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
        },
      }}
    >
      <ModalContent>
        {isLoading ? (
          <>
            <Text $Typo="Title1" $paletteColor="Main_orange">
              식단 분석 중...
            </Text>
            <Icon />
            <Text $Typo="Body4" $paletteColor="Gray6">
              {userName.substring(1)}님의 식단이 입력되었습니다.
              <br /> 분석중이니 잠시만 기다려주세요!
            </Text>
          </>
        ) : (
          <>
            <Text $Typo="Title1" $paletteColor="Main_orange">
              이 음식이 맞나요?
            </Text>
            <TextFields type={InputType.MenuInput} enable={true} />
            <Text $Typo="Body3" $paletteColor="Gray5">
              클릭해서 수정할 수 있어요
            </Text>
            <HashtagChips color={ColorType.MainOrange}>완료</HashtagChips>
          </>
        )}
      </ModalContent>
    </ReactModal>
  );
};

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;
`;
const Icon = styled.div`
  background: ${theme.palette.Main_orange};
  width: 70%;
  height: 50%;
`;
