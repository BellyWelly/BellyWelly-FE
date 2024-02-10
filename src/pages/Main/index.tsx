import { styled } from "styled-components";
import { BellyWellyLogo } from "../../assets/BellyWellyLogo";
import { RecordButton, RecordStress } from "../../components/Buttons";
import { DropdownCalendar } from "../../components/Calendar/DropdownCalendar";
import { WeekCalendar } from "../../components/Calendar/WeekCalendar";
import { Text } from "../../components/common";
import { theme } from "../../styles";

export const Main = () => {
  return (
    <Container>
      {/* 스트레스 기록 */}
      <div className="top-container">
        <div className="inner-container">
          <BellyWellyLogo />
          <DropdownCalendar />
        </div>
        <WeekCalendar />
        <RecordStress />
      </div>
      {/* 식단, 배변 현황  */}
      <div className="bottom-container">
        <div className="inner-container">
          <Text $Typo="Title1" $paletteColor="Gray7">
            오늘의 식단 현황
          </Text>
          <RecordButton />
        </div>
        <div className="inner-container">
          <Text $Typo="Title1" $paletteColor="Gray7">
            오늘의 배변 현황
          </Text>
          <RecordButton />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: ${theme.palette.BG_orange};

  .top-container {
    background: ${theme.palette.White};
    display: flex;
    height: 280px;
    flex-direction: column;
    padding: 20px 5% 10px 5%;
    gap: 7px;
  }
  .bottom-container {
    box-sizing: border-box;
    background: ${theme.palette.BG_orange};
    height: calc(100vh - 320px);
    padding: 20px 5% 0px 5%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .inner-container {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-height: 700px) {
    .top-container {
      height: 270px;
      padding: 20px 5% 10px 5%;
    }
    .bottom-container {
      box-sizing: initial;
      padding: 15px 5% 40px 5%;
    }
    .inner-container {
      gap: 5px;
    }
  }
`;
