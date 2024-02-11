import { styled } from "styled-components";
import { ArrowIcon, CameraIcon } from "../../assets/Icons";
import { ColorType, HashtagChips } from "../../components/Chips";
import { Text } from "../../components/common";
import { theme } from "../../styles";
import React, { useRef, useState } from "react";
import { BigButtons } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

interface MealTypesInterface {
  id: number;
  time: string;
}
const MealTypes: MealTypesInterface[] = [
  { id: 1, time: "아침" },
  { id: 2, time: "점심" },
  { id: 3, time: "저녁" },
  { id: 4, time: "기타" },
];

export const FoodRecord = () => {
  const [typeNum, setTypeNum] = useState<number>();
  const [imageSrc, setImageSrc] = useState<string>();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];
    if (fileUploaded) {
      const reader = new FileReader();
      reader.readAsDataURL(fileUploaded);

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImageSrc(
            reader.result instanceof ArrayBuffer ? "" : reader.result || ""
          );
          resolve();
        };
      });
    }
  };

  return (
    <Container>
      <div>
        <div className="icon-container" onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Text $Typo="Title1" $paletteColor="Gray6">
          어떤 식사를 하셨나요?
        </Text>

        <ImageContainer onClick={handleClick} image={imageSrc}>
          <input
            accept="image/*"
            multiple
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
            ref={hiddenFileInput}
          />
          <CameraIcon display={imageSrc != null ? "none" : "auto"} />
          <Img src={imageSrc || ""} image={imageSrc} />
        </ImageContainer>

        <Text $Typo="Title2" $paletteColor="Gray6">
          식사 종류
        </Text>

        <ChipsContainer>
          {MealTypes.map((type: MealTypesInterface) => (
            <HashtagChips
              color={
                type.id === typeNum ? ColorType.MainOrange : ColorType.Gray
              }
              onClick={() => setTypeNum(type.id)}
            >
              {type.time}
            </HashtagChips>
          ))}
        </ChipsContainer>
      </div>

      <BigButtons active={imageSrc != null && typeNum != null ? true : false}>
        분석하기
      </BigButtons>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 3%;

  .icon-container {
    padding: 20px 0 30px 0;
  }
`;
const ImageContainer = styled.div<{ image?: string }>`
  width: 100%;
  height: 330px;
  background: ${({ image }) =>
    image != null ? theme.palette.White : theme.palette.Gray2};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px 0;
`;
const ChipsContainer = styled.div`
  width: 100;
  display: flex;
  gap: 7px;
  padding: 15px 0;
`;
const Img = styled.img<{ image?: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: ${({ image }) => (image != null ? "auto" : "none")};
`;
