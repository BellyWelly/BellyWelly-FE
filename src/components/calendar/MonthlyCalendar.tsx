import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { theme } from "../../styles";
import { ko } from "date-fns/locale";
import "../../styles/css/monthlyCalendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { selectDate } from "../../store/recoil";
import { useRecoilState } from "recoil";

export const formatDate = (date: Date) => {
  const year = date.getFullYear(); // 연도를 가져옵니다.
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줍니다. 두 자리 숫자로 만듭니다.
  const day = String(date.getDate()).padStart(2, "0"); // 일을 두 자리 숫자로 만듭니다.

  return `${year}-${month}-${day}`; // 형식에 맞춰 문자열을 반환합니다.
};

export const MonthlyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [recoilDate, setRecoilDate] = useRecoilState(selectDate);

  const formattedDate = formatDate(selectedDate);

  useEffect(() => {
    setRecoilDate(formattedDate);
  }, [formattedDate]);

  return (
    <div>
      <FontAwesomeIcon
        icon={faCalendarDays}
        color={theme.palette.Gray8}
        style={{ marginRight: "6px" }}
      />
      <CustomDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd" // 날짜 형태
        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
        minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
        maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        selected={selectedDate}
        showPopperArrow={false}
        closeOnScroll={true}
        onChange={(date: Date) => setSelectedDate(date)}
      />
    </div>
  );
};

const CustomDatePicker = styled(DatePicker)`
  border: none;
  outline: none;
  caret-color: transparent;
  font-size: ${theme.typo.Title2};
  background-color: transparent;
  color: ${theme.palette.Gray8};
`;
