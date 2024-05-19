import { DefaultLayout } from "../../layout/defaultLayout";
import {
  ArrowIcon,
  SupportIcon1,
  SupportIcon2,
  SupportIcon3,
} from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Belly } from "../../assets/Icons/characters/Belly";
import { Text } from "../../components/common";
import { userNameState } from "../../store/recoil";
import { useRecoilValue } from "recoil";
import { Column, Img, ImgContainer, Row, palette } from "../../styles";

const GoodFoodList = [
  {
    img: "/mypage/두부",
    food: "두부",
  },
  {
    img: "/mypage/닭가슴살",
    food: "닭가슴살",
  },
  {
    img: "/mypage/요거트",
    food: "저지방 요거트",
  },
];

const BadFoodList = [
  {
    img: "/mypage/떡볶이",
    food: "떡볶이",
  },
  {
    img: "/mypage/마라탕",
    food: "마라탕",
  },
  {
    img: "/mypage/아이스크림",
    food: "아이스크림",
  },
];

const FoodBox = ({ img, food }: { img: string; food: string }) => {
  return (
    <FoodBoxContainer>
      <ImgContainer width={92} height={61}>
        <Img src={`${img}.png`} alt={food} />
      </ImgContainer>
      <Text $Typo="Body4" $paletteColor="Gray6">
        {food}
      </Text>
    </FoodBoxContainer>
  );
};

export const Mypage = () => {
  const navigate = useNavigate();
  const userName = useRecoilValue(userNameState);

  return (
    <DefaultLayout>
      <Container>
        <div className="icon-container" onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
        <Title>
          <div>
            <div className="user-name">
              <Text $Typo="Head2" $paletteColor="Main_orange">
                {userName.slice(1)}
              </Text>
              <Text $Typo="Title1" $paletteColor="Gray6">
                님
              </Text>
            </div>
            <Text $Typo="Title1" $paletteColor="Gray6">
              오늘도 쾌변하세요!
            </Text>
          </div>
          <div>
            <Belly width={82} height={82} />
          </div>
        </Title>
        <FeedBackSection gap={15}>
          <Text $Typo="Title2" $paletteColor="Gray6">
            {userName.slice(1)}님의 장 데이터
          </Text>
          <FeedBackBox gap={15}>
            <div>
              <Text $Typo="Body2" $paletteColor="Gray4">
                2024년 5월 5주차 피드백
              </Text>
              <Text $Typo="SubTitle2" $paletteColor="Main_orange">
                스트레스 지수가 너무 높아요
              </Text>
            </div>
            <Text $Typo="Body2" $paletteColor="Gray5">
              스트레스는 소화기 건강에 부정적인 영향을 줘요.
              <br /> 저포드맵 식단을 유지하면서 스트레스도 관리해줘야 해요.
              <br /> 특히 주말에 식단 관리에 더 주의를 기울여주세요!
            </Text>
          </FeedBackBox>
        </FeedBackSection>
        <FoodSection gap={7}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            이 음식들을 추천해요!
          </Text>
          <FoodBoxList>
            {GoodFoodList.map((food) => (
              <FoodBox img={food.img} food={food.food} />
            ))}
          </FoodBoxList>
        </FoodSection>
        <FoodSection gap={7}>
          <Text $Typo="SubTitle1" $paletteColor="Gray6">
            이 음식들을 피해야 해요!
          </Text>
          <FoodBoxList>
            {BadFoodList.map((food) => (
              <FoodBox img={food.img} food={food.food} />
            ))}
          </FoodBoxList>
        </FoodSection>
        <SupportSection gap={10}>
          <Text $Typo="Title2" $paletteColor="Gray6">
            고객 지원
          </Text>
          <Column gap={5}>
            <Row gap={10}>
              <SupportIcon1 />
              <Text $Typo="Body2" $paletteColor="Gray5">
                밸리웰리 가이드
              </Text>
            </Row>
            <Row gap={10}>
              <SupportIcon2 />
              <Text $Typo="Body2" $paletteColor="Gray5">
                밸리웰리에 문의하기
              </Text>
            </Row>
            <Row gap={10}>
              <SupportIcon3 />
              <Text $Typo="Body2" $paletteColor="Gray5">
                서비스 이용약관
              </Text>
            </Row>
          </Column>
        </SupportSection>
      </Container>
    </DefaultLayout>
  );
};

const Container = styled.div`
  padding: 25px 0;
  margin-bottom: 80px;

  .icon-container {
    padding: 0 17px;
    width: fit-content;
  }
`;

const Title = styled.div`
  margin: 0 17px;
  padding: 17px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${palette.Sub2_orange};

  .user-name {
    display: flex;
    align-items: center;
  }
`;

const FeedBackSection = styled(Column)`
  padding: 17px;
`;
const FeedBackBox = styled(Column)`
  padding: 21px 26px;
  border-radius: 12px;
  border: 1px solid ${palette.Main_orange};
`;
const FoodSection = styled(Column)`
  padding: 10px 17px;
`;

const FoodBoxList = styled.div`
  display: flex;
  flex-wrap: nowrap; // 자식 요소들이 줄바꿈되지 않도록 설정
  gap: 13px;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FoodBoxContainer = styled.div`
  width: 120px;
  height: 125px;
  border-radius: 6px;
  border: 1px solid ${palette.Gray3};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SupportSection = styled(Column)`
  margin-top: 10px;
  padding: 25px 17px 10px 17px;
  border-top: 1px solid ${palette.Sub2_orange};
`;
