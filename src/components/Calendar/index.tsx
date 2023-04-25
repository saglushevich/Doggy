import { useTranslation } from "react-i18next";

import arrow from "@assets/icons/arrow.svg";
import { DAYS, MONTHS, MONTHS_SHORT } from "@constants";
import { getCalendar } from "@utils";

import { useCalendar } from "../../hooks/useCalendar";
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

function Calendar() {
  const {
    selectedDate,
    selectedMonth,
    selectedYear,
    onSelectDate,
    changeMonth,
  } = useCalendar();
  const { t } = useTranslation();

  const calendar = getCalendar(selectedMonth, selectedYear);

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

  const timeslot = `${MONTHS_SHORT[selectedMonth]} ${selectedDate}, ${selectedYear}`;

  return (
    <Visit>
      <TimeSlots>
        <TimeTitle>
          {t("timeslot")} {timeslot}
        </TimeTitle>
        <Time>
          <Checkbox type="radio" id="time-1" name="time" />
          <Label htmlFor="time-1">11 am - 12 pm</Label>
        </Time>
        <Time>
          <Checkbox type="radio" id="time-2" name="time" />
          <Label htmlFor="time-2">12 pm - 1 pm</Label>
        </Time>
        <Time>
          <Checkbox type="radio" id="time-3" name="time" />
          <Label htmlFor="time-3">1 pm - 2 pm</Label>
        </Time>
        <Time>
          <Checkbox type="radio" id="time-4" name="time" />
          <Label htmlFor="time-4">3 pm - 4 pm</Label>
        </Time>
        <Time>
          <Checkbox type="radio" id="time-5" name="time" />
          <Label htmlFor="time-5">4 pm - 5 pm</Label>
        </Time>
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
