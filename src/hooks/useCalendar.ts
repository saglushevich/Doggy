import { useState } from "react";

export const useCalendar = () => {
  const date = new Date();

  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedDate, setSelectedDate] = useState(date.getDate());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  const changeMonth = (value: number) => () => {
    if (selectedMonth !== 0 && value < 0) {
      setSelectedMonth((prevSelectedMonth) => prevSelectedMonth - 1);
    }

    if (selectedMonth === 0 && value < 0) {
      setSelectedMonth(11);
      setSelectedYear((prevSelectedYear) => prevSelectedYear - 1);
    }

    if (selectedMonth !== 11 && value > 0) {
      setSelectedMonth((prevSelectedMonth) => prevSelectedMonth + 1);
    }

    if (selectedMonth === 11 && value > 0) {
      setSelectedMonth(0);
      setSelectedYear((prevSelectedYear) => prevSelectedYear + 1);
    }
  };

  const onSelectDate = (date: number, anotherMonth: boolean) => () => {
    if (anotherMonth) {
      if (date > 20) {
        changeMonth(-1)();
      } else {
        changeMonth(1)();
      }
    }
    setSelectedDate(date);
  };

  return {
    selectedDate,
    selectedMonth,
    selectedYear,
    onSelectDate,
    changeMonth,
  };
};
