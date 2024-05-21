export const getDateInfo = (dateString: string | null) => {
  // 날짜 형식을 Date 객체로 변환
  const date = dateString ? new Date(dateString) : new Date();
  const year = date.getFullYear(); // 년도
  const month = date.getMonth() + 1; // 월 (0부터 시작하기 때문에 +1)
  const dayOfMonth = date.getDate(); // 월의 몇 번째 날인지

  // 해당 월의 첫 번째 날짜로 설정
  const firstDayOfMonth = new Date(year, month - 1, 1);
  // 해당 월의 첫 번째 일요일을 구함
  const firstSundayOfMonth =
    firstDayOfMonth.getDate() - firstDayOfMonth.getDay();

  // 주어진 날짜와 해당 월의 첫 번째 일요일 간의 차이를 일 수로 계산
  const daysSinceFirstSunday = dayOfMonth - firstSundayOfMonth;

  // weeksSinceFirstSunday를 계산한 후 1을 더해 항상 1주차부터 시작하도록 함
  // daysSinceFirstSunday가 음수일 경우 (즉, 현재 날짜가 첫 번째 일요일 이전일 경우), 0주차로 계산되므로 여기에 1을 더해준다
  let weekNumber = Math.floor(daysSinceFirstSunday / 7) + 1;
  if (daysSinceFirstSunday < 0) {
    weekNumber = 1; // 첫 번째 일요일 이전의 날짜는 모두 1주차로 처리
  }

  return {
    year,
    month,
    week: weekNumber,
  };
};
