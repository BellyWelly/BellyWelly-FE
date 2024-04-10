import { styled } from "styled-components";
import { ArrowIcon, CameraIcon } from "../../../assets/Icons";
import { ColorType, HashtagChips } from "../../../components/chips";
import { Text } from "../../../components/common";
import { theme } from "../../../styles";
import React, { useRef, useState } from "react";
import { BigButtons } from "../../../components/Buttons";
import { useNavigate } from "react-router-dom";
import { FoodRecordResult } from "./FoodRecordResult";
import { SERVER, SERVER_AI } from "../../../network/config";
import { useRecoilValue } from "recoil";
import { userAccessToken } from "../../../store/recoil";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "../../../components/modal";

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
  const [s3imageUrl, setS3imageUrl] = useState<string>();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<boolean>(false);
  const [uploadFile, setUploadFile] = useState<File>();
  const [modalOpen, setModalOpen] = useState(true);

  const accessToken = useRecoilValue(userAccessToken);
  const navigate = useNavigate();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files?.[0];

    if (fileUploaded) {
      setUploadFile(fileUploaded);

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

  // 이미지 s3에 업로드
  const postImage = async () => {
    const formData = new FormData();
    formData.append("image", uploadFile!);

    const imgRes = await fetch(`${SERVER}/images`, {
      method: "post",
      headers: {
        //  "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    })
      .then((res) => res.text())
      .then((imgUrl) =>
        fetch(`${SERVER_AI}/detection`, {
          method: "post",
          headers: {
            "content-type": "application/json",
            // Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            imageUrl: imgUrl,
          }),
        })
          .then((res) => res.json())
          .then((res) => console.log(res))
      );

    // const presignedUrl = await res.text();

    /* const uploadRes = await fetch(presignedUrl, {
      method: "put",
      headers: {
        //  "content-type": "application/xml",
        "content-type": uploadFile?.type!,
      },
      body: uploadFile,
    });
    console.log(uploadRes);*/
  };

  return (
    <Container>
      <FoodRecordSection result={result}>
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
            {!imageSrc ? <CameraIcon /> : <Img src={imageSrc} />}
          </ImageContainer>

          <Text $Typo="Title2" $paletteColor="Gray6">
            식사 종류
          </Text>

          <ChipsContainer>
            {MealTypes.map((type: MealTypesInterface) => (
              <HashtagChips
                key={type.id}
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

        {!result && (
          <BigButtons
            active={imageSrc !== null && typeNum !== null ? true : false}
            onClick={() => postImage()}
          >
            분석하기
          </BigButtons>
        )}
      </FoodRecordSection>
      {result && <FoodRecordResult />}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;
const FoodRecordSection = styled.div<{ result?: boolean }>`
  width: 100%;
  height: ${({ result }) => (result ? "100%" : "calc(100vh - 30px)")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 3%;

  .icon-container {
    padding: 20px 0 30px 0;
    width: fit-content;
  }

  @media screen and (max-height: 700px) {
    padding: 3% 3% 0 3%;

    .icon-container {
      padding: 20px 0;
      width: fit-content;
    }
  }
`;
const ImageContainer = styled.div<{ image?: string }>`
  width: 100%;
  height: 330px;
  background: ${({ image }) =>
    image !== undefined ? theme.palette.White : theme.palette.Gray2};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px 0;

  @media screen and (max-height: 700px) {
    margin: 10px 0 20px 0;
  }
`;
const ChipsContainer = styled.div`
  width: 100;
  display: flex;
  gap: 7px;
  padding: 15px 0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
