import { useState } from "react";

export const useCalendar = () => {
  const date = new Date();

  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedDate, setSelectedDate] = useState(date.getDate());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  const changeMonth = (value: number) => () => {
    setSelectedDate(date.getDate());

    if (
      value < 0 &&
      selectedMonth === date.getMonth() &&
      selectedYear === date.getFullYear()
    ) {
      return;
    }

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

  const onSelectDate = (selected: number, anotherMonth: boolean) => () => {
    const currDate = date.getDate();
    const currMonth = date.getMonth();
    const currYear = date.getFullYear();

    const current = new Date(currYear, currMonth, currDate).toISOString();
    const selectedDates = new Date(
      selectedYear,
      selectedMonth,
      selected
    ).toISOString();

    if (anotherMonth) {
      if (selected > 20) {
        changeMonth(-1)();
      } else {
        changeMonth(1)();
      }
    }

    if (
      current <= selectedDates &&
      !(selected > 20 && anotherMonth && currMonth === selectedMonth)
    ) {
      setSelectedDate(selected);
    }
  };

  return {
    selectedDate,
    selectedMonth,
    selectedYear,
    onSelectDate,
    changeMonth,
  };
};
