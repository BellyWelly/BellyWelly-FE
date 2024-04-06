import { styled } from "styled-components";
import { DayButton } from "../Buttons/Main/DayButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectDate } from "../../store/recoil";
import { formatDate } from "./monthlyCalendar";

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

export const WeekCalendar = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectDate);

  const weekDates = getDayOfWeek(selectedDate);

  const onClick = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <WeekContainer>
      {weekDates.map((day) => (
        <DayButton
          key={day.date}
          day={day.dayOfWeek[0]}
          date={day.date.slice(-2)}
          active={day.date === selectedDate}
          onClick={() => onClick(day.date)}
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
