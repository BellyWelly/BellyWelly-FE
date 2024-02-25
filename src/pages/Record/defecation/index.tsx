import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../../../assets/Icons";
import { Text } from "../../../components/common";
import { styled } from "styled-components";
import { PoopTypeButtons } from "../../../components/Buttons";
import { useState } from "react";
import { DefactionStatusBar } from "../../../components/Record";

export const DefecationRecord = () => {
  const [scaleId, setScaleId] = useState<number>(-1);

  const navigate = useNavigate();

  return (
    <Container>
      <div className="icon-container" onClick={() => navigate(-1)}>
        <ArrowIcon />
      </div>
      <Text $Typo="Title1" $paletteColor="Gray6">
        배변은 어떠셨나요?
      </Text>

      <Text $Typo="SubTitle1" $paletteColor="Gray6">
        배변 형태
      </Text>
      <PoopTypeButtons setScaleId={setScaleId} id={scaleId} />

      <Text $Typo="SubTitle1" $paletteColor="Gray6">
        배변 긴박감
      </Text>
      <DefactionStatusBar />
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

  .icon-container {
    padding: 20px 0 30px 0;
    width: fit-content;
  }
`;
