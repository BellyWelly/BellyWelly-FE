export const getDateInfo = (dateString: string | null) => {
  // 날짜 형식을 Date 객체로 변환
  const date = dateString ? new Date(dateString) : new Date();
  const year = date.getFullYear(); // 년도
  const month = date.getMonth() + 1; // 월 (0부터 시작하기 때문에 +1)
  const dayOfMonth = date.getDate(); // 월의 몇 번째 날인지

  // 해당 월의 첫 번째 날짜와 주어진 날짜가 같은 주에 있는지 확인하기 위해 비교
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstWeekdayOfMonth = firstDayOfMonth.getDay() || 7; // 일요일은 0을 반환하므로, 7로 처리

  // 첫 번째 날의 요일에 따라 첫 번째 주의 시작일 계산 (월요일 시작 기준)
  const startDayOfFirstWeek =
    firstDayOfMonth.getDate() - firstWeekdayOfMonth + 1;

  // 주어진 날짜의 주 계산
  const weekNumber = Math.ceil((dayOfMonth - startDayOfFirstWeek) / 7) + 1;

  return {
    year,
    month,
    week: weekNumber,
  };
};
