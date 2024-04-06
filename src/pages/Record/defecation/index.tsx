import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/Icons";
import { Text } from "../../../components/common";
import { styled } from "styled-components";
import { BigButtons, PoopTypeButtons } from "../../../components/Buttons";
import { useState } from "react";
import { DefactionStatusBar, DefactionColor } from "../../../components/record";
import {
  FastOption,
  PoopColors,
  PoopTiems,
  SatisfiedOption,
} from "../../../assets/info/ScaleRecordInfo";
import { Column, Row } from "../../../styles";
import { ColorType, HashtagChips } from "../../../components/chips/Chips";
import { SERVER } from "../../../network/config";
import { useRecoilValue } from "recoil";
import { userAccessToken } from "../../../store/recoil";

export const DefecationRecord = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(userAccessToken);

  const [scaleDescription, setScaleDescription] = useState("");
  const [urgencyIndex, setUrgencyIndex] = useState(0);
  const [colorName, setColorName] = useState("");
  const [satisfiedIndex, setSatisfiedIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(0);

  const postDefaction = () => {
    if (scaleDescription !== "" && colorName !== "") {
      fetch(`${SERVER}/records/defecation`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          form: scaleDescription,
          urgency: urgencyIndex + 1,
          color: colorName,
          satisfaction: satisfiedIndex + 1,
          duration: timeIndex + 1,
        }),
      })
        .then(() => {
          alert("배변 기록이 완료되었습니다");
          navigate("/");
        })
        .catch((error) => console.error("Error:", error));
    } else {
      alert("모든 항목을 입력해주세요");
    }
  };

  return (
    <Container>
      <>
        <div>
          <div className="icon-container" onClick={() => navigate(-1)}>
            <ArrowIcon />
          </div>
          <Text $Typo="Title1" $paletteColor="Gray6">
            배변은 어떠셨나요?
          </Text>
        </div>

        <Column gap={10}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            배변 형태
          </Text>
          <PoopTypeButtons
            setScaleDescription={setScaleDescription}
            scaleDescription={scaleDescription}
          />
        </Column>

        <Column gap={15}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            배변 긴박감
          </Text>
          <DefactionStatusBar
            currentIndex={urgencyIndex}
            setCurrentIndex={setUrgencyIndex}
            options={FastOption}
          />
        </Column>

        <Column gap={10}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            배변 색상
          </Text>
          <Row justifyContent="space-between" alignItems="center">
            {PoopColors.map((color) => (
              <DefactionColor
                key={color.colorName}
                color={color.color}
                onClick={() => setColorName(color.colorName)}
                active={color.colorName === colorName ? true : false}
              />
            ))}
          </Row>
        </Column>

        <Column gap={15}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            배변 만족도
          </Text>
          <DefactionStatusBar
            currentIndex={satisfiedIndex}
            setCurrentIndex={setSatisfiedIndex}
            options={SatisfiedOption}
          />
        </Column>

        <Column gap={10}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            배변 소요시간
          </Text>
          <Row gap={10}>
            {PoopTiems.map((time: string, index: number) => (
              <HashtagChips
                key={time}
                color={
                  index === timeIndex ? ColorType.MainOrange : ColorType.Gray
                }
                onClick={() => setTimeIndex(index)}
              >
                {time}
              </HashtagChips>
            ))}
          </Row>
        </Column>
      </>

      <div style={{ marginTop: "30px" }}>
        <BigButtons
          active={scaleDescription !== "" && colorName !== "" ? true : false}
          onClick={() => postDefaction()}
        >
          저장하기
        </BigButtons>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 3%;
  gap: 30px;

  .icon-container {
    padding: 20px 0 30px 0;
    width: fit-content;
  }

  @media screen and (max-height: 700px) {
    height: 100%;
  }
`;
