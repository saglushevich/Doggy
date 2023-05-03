export const getCalendar = (month: number, year: number) => {
  const calendar = [];
  let calendarRow: number[] = [];

  const startMonth = new Date(year, month, 1).getDay();
  const daysInMonth = 33 - new Date(year, month, 33).getDate();
  const daysInPrevMonth = 33 - new Date(year, month - 1, 33).getDate();

  let day = 1;
  let prevMonth = startMonth - 2;
  let nextMonth = 1;

  for (let i = 1; i <= 35; i++) {
    if (i >= startMonth) {
      if (day <= daysInMonth) {
        calendarRow.push(day);
        day++;
      } else {
        calendarRow.push(nextMonth);
        nextMonth++;
      }
    } else {
      calendarRow.push(daysInPrevMonth - prevMonth);
      prevMonth--;
    }

    if (i % 7 === 0 || i === 35) {
      calendar.push(calendarRow);
      calendarRow = [];
    }
  }

  return calendar;
};
