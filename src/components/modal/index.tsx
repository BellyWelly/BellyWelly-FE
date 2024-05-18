import ReactModal from "react-modal";
import { theme } from "../../styles";
import styled from "styled-components";
import { Text } from "../common";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  foodLabelsAnalysisResult,
  userAccessToken,
  userNameState,
} from "../../store/recoil";
import { InputType, TextFields } from "../textFields";
import { ColorType, HashtagChips } from "../chips";
import { FoodResultLabelsInterface } from "../../pages/Record";
import { v4 as uuidv4 } from "uuid";
import { SERVER } from "../../network/config";
import { MagnifierBelly } from "../../assets/Icons/characters/Belly";

export const Modal = ({
  imgUrl,
  mealTime,
  foodResultLabels,
  isLoading,
  modalOpen,
  setShowResult,
  setModalOpen,
}: {
  imgUrl: string;
  mealTime: string;
  foodResultLabels: string[];
  isLoading: boolean;
  modalOpen: boolean;
  setShowResult: any;
  setModalOpen: any;
}) => {
  const userName = useRecoilValue(userNameState);
  const accessToken = useRecoilValue(userAccessToken);
  const [dietResult, setDietResult] = useRecoilState(foodLabelsAnalysisResult);

  const postFoodResultLables = () => {
    fetch(`${SERVER}/records/diet`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        image: imgUrl,
        mealtime: mealTime,
        meal: foodResultLabels,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setDietResult(res);
        setShowResult(true);
      });
  };

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
          height: "45%",
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
            <MagnifierBelly width={146} height={142} />
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
            <FoodResultContainer>
              {foodResultLabels?.map((label: string) => (
                <TextFields
                  key={uuidv4()}
                  value={label}
                  type={InputType.MenuInput}
                  enable={true}
                />
              ))}
              <TextFields
                key={uuidv4()}
                type={InputType.MenuInput}
                enable={false}
              />
            </FoodResultContainer>
            <Text $Typo="Body3" $paletteColor="Gray5">
              클릭해서 수정할 수 있어요
            </Text>
            <HashtagChips
              color={ColorType.MainOrange}
              onClick={() => {
                setModalOpen(false);
                postFoodResultLables();
              }}
            >
              완료
            </HashtagChips>
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
const FoodResultContainer = styled.div`
  width: 100%;
  min-height: 50%; /* 최소 높이 설정 */
  max-height: 50%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;
