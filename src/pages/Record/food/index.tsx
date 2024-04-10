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
export interface FoodResultLabelsInterface {
  labels: string[];
}
export interface FoodLabelsAnalysisResultInterface {
  image: string;
  mealtime: string;
  meal: string[];
  fodmapList: {
    lowFodmap: string[];
    highFodmap: string[];
  };
  nutrient: {
    fructose: number;
    sucrose: number;
    lactose: number;
    maltose: number;
    fiber: number;
  };
}

export const FoodRecord = () => {
  const [mealTime, setMealTime] = useState<number>();
  const [imageSrc, setImageSrc] = useState<string>();
  const [s3ImageUrl, setS3ImageUrl] = useState<string>();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [foodResultLabels, setFoodResultLabels] =
    useState<FoodResultLabelsInterface>({ labels: [] });
  const [uploadFile, setUploadFile] = useState<File>();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    if (uploadFile !== undefined && mealTime !== undefined) {
      setIsLoading(true);
      setModalOpen(true);

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
        .then((imgUrl) => {
          setS3ImageUrl(imgUrl);
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
            .then((res) => {
              setIsLoading(false);
              setFoodResultLabels(res!);
            });
        });

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
    } else {
      if (imageSrc === undefined && mealTime !== undefined)
        alert("사진을 첨부해주세요");
      else if (imageSrc !== undefined && mealTime === undefined)
        alert("식사 종류를 입력해주세요");
      else alert("사진과 식사 종류를 입력해주세요");
    }
  };

  return (
    <Container>
      <FoodRecordSection result={showResult}>
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
                  type.id === mealTime ? ColorType.MainOrange : ColorType.Gray
                }
                onClick={() => setMealTime(type.id)}
              >
                {type.time}
              </HashtagChips>
            ))}
          </ChipsContainer>
        </div>

        {!showResult && (
          <BigButtons
            active={imageSrc !== undefined && mealTime !== undefined}
            onClick={() => postImage()}
          >
            분석하기
          </BigButtons>
        )}
      </FoodRecordSection>
      {modalOpen && (
        <Modal
          imgUrl={s3ImageUrl!}
          mealTime={
            MealTypes.find((type) => type.id === mealTime)?.time || "기타"
          }
          foodResultLabels={isLoading ? { labels: [] } : foodResultLabels}
          isLoading={isLoading}
          modalOpen={modalOpen}
          setShowResult={setShowResult}
          setModalOpen={setModalOpen}
        />
      )}
      {showResult && <FoodRecordResult />}
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
