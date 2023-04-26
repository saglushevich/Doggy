import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import arrow from "@assets/icons/arrow.svg";
import { DAYS, MONTHS, MONTHS_SHORT } from "@constants";
import { useCalendar } from "@hooks";
import { IReducer } from "@interfaces";
import { TIMESLOTS } from "@mocks";
import { getCalendar } from "@utils";

import {
  Arrow,
  CalendarBlock,
  CalendarWrapper,
  Checkbox,
  Control,
  ControlText,
  Day,
  Days,
  Label,
  Time,
  TimeSlots,
  TimeTitle,
  Visit,
} from "./styles";

function Calendar({ onInputChange, onSetCalendarDate }: IReducer) {
  const {
    selectedDate,
    selectedMonth,
    selectedYear,
    onSelectDate,
    changeMonth,
  } = useCalendar();
  const { t } = useTranslation();

  const calendar = getCalendar(selectedMonth, selectedYear);

  const selectedTimeslot = `${MONTHS_SHORT[selectedMonth]} ${selectedDate}, ${selectedYear}`;

  useEffect(() => {
    if (onSetCalendarDate) {
      onSetCalendarDate(selectedTimeslot);
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  const days = DAYS.map((day, i) => (
    <Day day key={i}>
      {day}
    </Day>
  ));

  const dates = calendar.map((row, i) => {
    return row.map((date, j) => {
      const anotherMonth = (i === 0 && date > 7) || (i === 4 && date < 8);
      return (
        <Day
          onClick={onSelectDate(date, anotherMonth)}
          gray={anotherMonth}
          active={date === selectedDate}
          key={j}
        >
          {date}
        </Day>
      );
    });
  });

  const timeslots = TIMESLOTS.map(({ id, value }) => (
    <Time key={id}>
      <Checkbox
        onChange={onInputChange("SET_TIME")}
        type="radio"
        id={id}
        name="time"
        value={value}
      />
      <Label htmlFor={id}>{value}</Label>
    </Time>
  ));

  return (
    <Visit>
      <TimeSlots>
        <TimeTitle>
          {t("timeslot")} {selectedTimeslot}
        </TimeTitle>
        {timeslots}
      </TimeSlots>

      <CalendarWrapper>
        <Control>
          <ControlText>{t("dates")}</ControlText>
          <CalendarBlock>
            <Arrow onClick={changeMonth(-1)} src={arrow} />
            <ControlText>
              {MONTHS[selectedMonth]} {selectedYear}
            </ControlText>
            <Arrow onClick={changeMonth(1)} src={arrow} />
          </CalendarBlock>
        </Control>

        <Days>
          {days}
          {dates}
        </Days>
      </CalendarWrapper>
    </Visit>
  );
}

export default Calendar;
