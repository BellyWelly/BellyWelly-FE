import { styled } from "styled-components";
import { RecordButton, RecordStress } from "../../components/Buttons";
import { DropdownCalendar, WeekCalendar } from "../../components/Calendar";
import { Text } from "../../components/common";
import { ArrowIcon, BellyWellyLogo } from "../../assets/Icons";
import { Row, theme } from "../../styles";
import { useState } from "react";
import { DefecationBox, MainTodayDietBoxes } from "../../components";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const [stressIcon, setStressIcon] = useState<boolean>(false);
  let data = true;
  const navigate = useNavigate();

  return (
    <Container>
      {/* 스트레스 기록 */}
      <div className="top-container">
        <div className="inner-container">
          <BellyWellyLogo />
          <DropdownCalendar />
        </div>
        <WeekCalendar />
        <RecordStress display={stressIcon} />
      </div>
      {/* 식단, 배변 현황  */}
      <div className="bottom-container">
        <div className="inner-container">
          <Row justifyContent="space-between">
            <Text $Typo="Title2" $paletteColor="Gray7">
              오늘의 식단 현황
            </Text>
            {data && (
              <Row
                alignItems="center"
                gap={5}
                onClick={() => navigate("/foodRecord")}
              >
                <Text $Typo="Body1" $paletteColor="Gray8">
                  기록하기
                </Text>
                <ArrowIcon width={18.5} height={18.5} rotate={180} />
              </Row>
            )}
          </Row>
          {data ? <MainTodayDietBoxes /> : <RecordButton />}
        </div>
        <div className="inner-container">
          <Row justifyContent="space-between">
            <Text $Typo="Title2" $paletteColor="Gray7">
              오늘의 배변 현황
            </Text>
            {data && (
              <Row
                alignItems="center"
                gap={5}
                onClick={() => navigate("/defecationRecord")}
              >
                <Text $Typo="Body1" $paletteColor="Gray8">
                  기록하기
                </Text>
                <ArrowIcon width={18.5} height={18.5} rotate={180} />
              </Row>
            )}
          </Row>
          {data ? (
            <Row gap={12}>
              <DefecationBox score={3}>배변 횟수</DefecationBox>
              <DefecationBox score={17}>배변 점수</DefecationBox>
            </Row>
          ) : (
            <RecordButton />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: ${theme.palette.BG_orange};
  height: 100vh;

  .top-container {
    background: ${theme.palette.White};
    display: flex;
    flex-direction: column;
    padding: 20px 5% 10px 5%;
    gap: 7px;
  }
  .bottom-container {
    box-sizing: border-box;
    // height: calc(100vh - 320px);
    padding: 20px 5% 0px 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .inner-container {
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-height: 700px) {
    height: 100%;

    .top-container {
      padding: 20px 5% 10px 5%;
    }
    .bottom-container {
      box-sizing: initial;
      padding: 15px 5% 110px 5%;
    }
  }
`;
