import { styled } from "styled-components";
import { RecordButton, RecordStress } from "../../components/Buttons";
import { WeekCalendar } from "../../components/calendar";
import { Text } from "../../components/common";
import { ArrowIcon, BellyWellyLogo } from "../../assets/Icons";
import { Row, theme } from "../../styles";
import { useEffect, useState } from "react";
import { DefecationBox, MainTodayDietBoxes } from "../../components";
import { useNavigate } from "react-router-dom";
import { DefaultLayout } from "../../layout/defaultLayout";
import { useRecoilValue } from "recoil";
import { selectDate, stressLevel, userAccessToken } from "../../store/recoil";
import {
  MonthlyCalendar,
  formatDate,
} from "../../components/calendar/monthlyCalendar";
import { getDailyRecord } from "../../network/apis/dailyRecord";

export interface DailyInfoInterface {
  stress: StressInterface;
  diet: DietInterface;
  defecation: DefecationInterface;
}
export interface StressInterface {
  sun: number;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
}
export interface DietInterface {
  hasDiet: boolean;
  comment: string;
  lowFodmapRatio: number;
  highFodmapRatio: number;
  hasBreakfast: boolean;
  hasLunch: boolean;
  hasDinner: boolean;
  hasOther: boolean;
}
export interface DefecationInterface {
  count: number;
  score: number;
}

export const Main = () => {
  const navigate = useNavigate();
  const selectedDate = useRecoilValue<string>(selectDate);
  const accessToken = useRecoilValue(userAccessToken);
  const stress = useRecoilValue(stressLevel);

  const [openStress, setOpenStress] = useState<boolean>(false);
  const [dailyData, setDailyData] = useState<DailyInfoInterface>();

  const toggleOpenStress = () => {
    setOpenStress((prev) => !prev);
  };

  useEffect(() => {
    getDailyRecord(selectedDate, accessToken).then((res) => setDailyData(res));
  }, [selectedDate, stress]);

  return (
    <DefaultLayout>
      <Container>
        {/* 주 */}
        <div className="top-container">
          <div className="inner-container">
            <BellyWellyLogo />
            <MonthlyCalendar />
          </div>
          <WeekCalendar
            toggleOpenStress={toggleOpenStress}
            dailyStressData={dailyData?.stress as StressInterface}
          />
          {/* 스트레스 기록 */}
          {formatDate(new Date()) === selectedDate && (
            <RecordStress display={openStress} setOpenStress={setOpenStress} />
          )}
        </div>
        {/* 식단, 배변 현황  */}
        <div className="bottom-container">
          <div className="inner-container">
            <Row justifyContent="space-between">
              <Text $Typo="Title2" $paletteColor="Gray7">
                오늘의 식단 현황
              </Text>
              {dailyData?.diet?.hasDiet && (
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
            {!dailyData?.diet?.hasDiet ? (
              <RecordButton link="/foodRecord" />
            ) : (
              <MainTodayDietBoxes dailyDietData={dailyData?.diet!} />
            )}
          </div>
          <div className="inner-container">
            <Row justifyContent="space-between">
              <Text $Typo="Title2" $paletteColor="Gray7">
                오늘의 배변 현황
              </Text>

              {dailyData?.defecation?.count !== 0 && (
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
            {dailyData?.defecation?.count !== 0 ? (
              <Row gap={12}>
                <DefecationBox score={dailyData?.defecation?.count || 0}>
                  배변 횟수
                </DefecationBox>
                <DefecationBox score={dailyData?.defecation?.score || 0}>
                  배변 점수
                </DefecationBox>
              </Row>
            ) : (
              <RecordButton link="/defecationRecord" />
            )}
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
};

const Container = styled.div`
  height: 100vh;
  background: ${theme.palette.BG_orange};

  .top-container {
    background: ${theme.palette.White};
    display: flex;
    flex-direction: column;
    padding: 20px 5% 10px 5%;
    gap: 7px;
  }
  .bottom-container {
    background: ${theme.palette.BG_orange};

    box-sizing: border-box;
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

  @media screen and (max-height: 750px) {
    .top-container {
      padding: 20px 5% 10px 5%;
    }
    .bottom-container {
      box-sizing: initial;
      padding: 15px 5% 110px 5%;
    }
  }
`;
