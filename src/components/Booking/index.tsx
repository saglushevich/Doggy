import { SyntheticEvent, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";

import Calendar from "@components/Calendar";
import Location from "@components/Location";
import Modal from "@components/Modal";
import Payment from "@components/Payment";
import { INITIAL_STATE } from "@constants";
import { Container } from "@layout";
import { reducer } from "@utils";

import {
  Button,
  Cancelling,
  Form,
  Input,
  Inputs,
  Requests,
  Selection,
  Title,
  Wrapper,
} from "./styles";

function Booking() {
  const [appointment, dispatch] = useReducer(reducer, INITIAL_STATE);

  const [modalStatus, setModalStatus] = useState(false);
  const { t } = useTranslation();

  const toggleModalStatus = (e?: SyntheticEvent) => {
    if (e?.target === e?.currentTarget) {
      setModalStatus((prevModalStatus) => !prevModalStatus);
    }
  };

  const onInputChange =
    (action: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: action, payload: e.target.value });
    };

  const onSetCalendarDate = (value: string) => {
    dispatch({ type: "SET_DATE", payload: value });
  };

  const onFormSubmit = () => {
    if (Object.values(appointment).every(Boolean)) {
      toggleModalStatus();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Selection>
          <Title>{t("enter information")}</Title>
          <Form>
            <Inputs>
              <Input
                onChange={onInputChange("SET_NAME")}
                placeholder={t("name") as string}
              />
              <Input
                onChange={onInputChange("SET_SURNAME")}
                placeholder={t("surname") as string}
              />
            </Inputs>
            <Inputs>
              <Input
                onChange={onInputChange("SET_EMAIL")}
                placeholder="Email"
              />
              <Input
                onChange={onInputChange("SET_PHONE")}
                type="number"
                placeholder={t("phone") as string}
              />
            </Inputs>
            <Calendar
              onInputChange={onInputChange}
              onSetCalendarDate={onSetCalendarDate}
            />
            <Requests
              onChange={onInputChange("SET_REQUEST")}
              placeholder={t("special request") as string}
            />
            <Payment onInputChange={onInputChange} />
            <Cancelling>{t("cancelling")}</Cancelling>
            <Button onClick={onFormSubmit}>{t("book appointment")}</Button>
          </Form>
        </Selection>
        <Location />
      </Wrapper>
      {modalStatus && (
        <Modal
          appointment={appointment}
          toggleModalStatus={toggleModalStatus}
        />
      )}
    </Container>
  );
}

export default Booking;
