import { styled } from "styled-components";
import { DayButton, WeekInterface } from "../Buttons/Main/DayButton";

const Week: WeekInterface[] = [
  {
    day: "일",
    date: "08",
  },
  {
    day: "월",
    date: "09",
  },
  {
    day: "화",
    date: "10",
  },
  {
    day: "수",
    date: "11",
  },
  {
    day: "목",
    date: "12",
  },
  {
    day: "금",
    date: "13",
  },
  {
    day: "토",
    date: "14",
  },
];

export const WeekCalendar = () => {
  return (
    <WeekContainer>
      {Week.map((day) => (
        <DayButton
          key={day.date}
          day={day.day}
          date={day.date}
          active={day.date === "14"}
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
