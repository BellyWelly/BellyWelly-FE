import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/Icons";
import { Text } from "../../../components/common";
import { styled } from "styled-components";
import { BigButtons, PoopTypeButtons } from "../../../components/Buttons";
import { useState } from "react";
import { DefactionStatusBar } from "../../../components/Record";
import {
  FastOption,
  PoopColors,
  PoopTiems,
  SatisfiedOption,
} from "../../../assets/info/ScaleRecordInfo";
import { Column, Row, theme } from "../../../styles";
import { ColorType, HashtagChips } from "../../../components/Chips";

export const DefecationRecord = () => {
  const [scaleId, setScaleId] = useState(-1);
  const [fastIndex, setFastIndex] = useState(0);
  const [satisfiedIndex, setSatisfiedIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <Container>
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
        <PoopTypeButtons setScaleId={setScaleId} id={scaleId} />
      </Column>

      <Column gap={15}>
        <Text $Typo="SubTitle1" $paletteColor="Gray6">
          배변 긴박감
        </Text>
        <DefactionStatusBar
          currentIndex={fastIndex}
          setCurrentIndex={setFastIndex}
          options={FastOption}
        />
      </Column>

      <Column gap={10}>
        <Text $Typo="SubTitle1" $paletteColor="Gray6">
          배변 색상
        </Text>
        <Row justifyContent="space-between">
          {PoopColors.map((color) => (
            <ColorButton key={color.colorName} color={color.color} />
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
          {PoopTiems.map((time: string) => (
            <HashtagChips key={time} color={ColorType.Gray}>
              {time}
            </HashtagChips>
          ))}
        </Row>
      </Column>

      <div style={{ marginTop: "30px" }}>
        <BigButtons active={false}>저장하기</BigButtons>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
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
`;

const ColorButton = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  background: ${({ color }) => (color ? color : theme.palette.Black)};
  border-radius: 50%;
`;
