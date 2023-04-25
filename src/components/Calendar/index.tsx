import { useTranslation } from "react-i18next";

import arrow from "@assets/icons/arrow.svg";

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
  const { t } = useTranslation();
  // const date = new Date();

  const days = ["S", "M", "T", "W", "T", "F", "S"].map((item, i) => (
    <Day key={i}>{item}</Day>
  ));

  // console.log(33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate())
  // console.log(date.getDate());
  // console.log(date.getDay())

  return (
    <Visit>
      <TimeSlots>
        <TimeTitle>{t("timeslot")} Dec. 11th, 2021:</TimeTitle>
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
            <Arrow src={arrow} />
            <ControlText>December 2021</ControlText>
            <Arrow src={arrow} />
          </CalendarBlock>
        </Control>
        <Days>
          {days}
          {days}
          {days}
          {days}
          {days}
          {days}
        </Days>
      </CalendarWrapper>
    </Visit>
  );
}

export default Calendar;
