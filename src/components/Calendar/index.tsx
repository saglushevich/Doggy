import { memo, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import arrow from "@assets/icons/arrow.svg";
import { DAYS, MONTHS, MONTHS_SHORT } from "@constants";
import { useCalendar } from "@hooks";
import { TIMESLOTS } from "@mocks";
import { IPayment } from "@types";
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

function Calendar({ onInputChange, onSetCalendarDate }: IPayment) {
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
  }, [onSetCalendarDate, selectedTimeslot]);

  const days = useMemo(
    () =>
      DAYS.map((day, index) => (
        <Day day key={index}>
          {day}
        </Day>
      )),
    []
  );

  const dates = calendar.map((row, index) => {
    return row.map((date, j) => {
      const anotherMonth =
        (index === 0 && date > 7) || (index === 4 && date < 8);
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

  const compareTimes = (disableTime: number) => {
    const date = new Date();

    return (
      disableTime <= date.getHours() &&
      selectedMonth === date.getMonth() &&
      selectedYear === date.getFullYear() &&
      selectedDate === date.getDate()
    );
  };

  const timeslots = TIMESLOTS.map(({ id, value, disableTime }) => {
    const disabled = compareTimes(disableTime);
    return (
      <Time key={id}>
        <Checkbox
          onChange={onInputChange("SET_TIME")}
          type="radio"
          id={id}
          defaultChecked={disableTime > new Date().getHours()}
          name="time"
          value={value}
          disabled={disabled}
        />
        <Label htmlFor={id}>{value}</Label>
      </Time>
    );
  });

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

export default memo(Calendar);
