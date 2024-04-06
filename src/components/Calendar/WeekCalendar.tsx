import { styled } from "styled-components";
import { DayButton } from "../Buttons/Main/DayButton";
import { useRecoilState } from "recoil";
import { selectDate } from "../../store/recoil";
import { formatDate } from "./monthlyCalendar";
import { StressInterface } from "../../pages/Main";

const getDayOfWeek = (dateString: string) => {
  const daysOfWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const baseDate = new Date(dateString);
  baseDate.setHours(0, 0, 0, 0); // 시간을 00:00:00.000으로 설정

  // 주어진 날짜로부터 바로 이전 일요일 찾기
  const lastSunday = new Date(baseDate);
  lastSunday.setDate(baseDate.getDate() - baseDate.getDay());

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    // 일요일부터 토요일까지 반복
    const currentDate = new Date(lastSunday);
    currentDate.setDate(lastSunday.getDate() + i);

    const dateStr = formatDate(currentDate);
    const dayOfWeekStr = daysOfWeek[currentDate.getDay()];

    weekDates.push({
      dayOfWeek: dayOfWeekStr,
      date: dateStr,
    });
  }

  return weekDates;
};

export const WeekCalendar = ({
  toggleOpenStress,
  dailyStressData,
}: {
  toggleOpenStress: () => void;
  dailyStressData: StressInterface;
}) => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectDate);

  const weekDates = getDayOfWeek(selectedDate);

  const changeSelectedDate = (date: string) => {
    setSelectedDate(date);
  };
  const getDayAbbreviation = (dayOfWeek: string) => {
    switch (dayOfWeek) {
      case "월요일":
        return "mon";
      case "화요일":
        return "tue";
      case "수요일":
        return "wed";
      case "목요일":
        return "thu";
      case "금요일":
        return "fri";
      case "토요일":
        return "sat";
      case "일요일":
        return "sun";
      default:
        return "sun";
    }
  };

  return (
    <WeekContainer>
      {weekDates.map((weekDate) => (
        <DayButton
          key={weekDate.date}
          weekDates={weekDate}
          active={weekDate.date === selectedDate}
          stressLevel={
            dailyStressData?.[getDayAbbreviation(weekDate.dayOfWeek)]
          }
          onClick={() => changeSelectedDate(weekDate.date)}
          toggleOpenStress={toggleOpenStress}
        />
      ))}
    </WeekContainer>
  );
};

const WeekContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
