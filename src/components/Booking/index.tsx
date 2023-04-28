import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import { SyntheticEvent, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";

import Calendar from "@components/Calendar";
import Location from "@components/Location";
import Modal from "@components/Modal";
import Payment from "@components/UI/Payment";
import { CLIENT_INFO, INITIAL_STATE } from "@constants";
import { Container } from "@layout";
import { reducer } from "@utils";

import {
  Button,
  Cancelling,
  Forms,
  Input,
  Inputs,
  Message,
  Messages,
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

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: CLIENT_INFO,
    onSubmit: () => {
      toggleModalStatus();
    },
  });

  const {
    values: { name, surname, phone, email },
    handleChange,
    errors,
  } = formik;

  const onInputChange =
    (action: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: action, payload: e.target.value });
      handleChange(e);
    };

  const onSetCalendarDate = (value: string) => {
    dispatch({ type: "SET_DATE", payload: value });
  };

  // const errorMessages = Object.keys(errors).map((err) => (
  //   <ErrorMessage key={err} name={err}>
  //     {(msg) => <Message>{msg}</Message>}
  //   </ErrorMessage>
  // ));

  return (
    <Container>
      <Wrapper>
        <Selection>
          <Title>{t("enter information")}</Title>
          <FormikProvider value={formik}>
            <Form>
              <Forms>
                <Messages>
                  <ErrorMessage name="name">
                    {(msg) => <Message>{msg}</Message>}
                  </ErrorMessage>
                  <ErrorMessage name="surname">
                    {(msg) => <Message>{msg}</Message>}
                  </ErrorMessage>
                </Messages>
                <Inputs>
                  <Input
                    name="name"
                    value={name}
                    onChange={onInputChange("SET_NAME")}
                    placeholder={t("name") as string}
                  />
                  <Input
                    name="surname"
                    value={surname}
                    onChange={onInputChange("SET_SURNAME")}
                    placeholder={t("surname") as string}
                  />
                </Inputs>
                <Messages>
                  <ErrorMessage name="email">
                    {(msg) => <Message>{msg}</Message>}
                  </ErrorMessage>
                  <ErrorMessage name="phone">
                    {(msg) => <Message>{msg}</Message>}
                  </ErrorMessage>
                </Messages>
                <Inputs>
                  <Input
                    value={email}
                    onChange={onInputChange("SET_EMAIL")}
                    placeholder="Email"
                    name="email"
                  />
                  <Input
                    value={phone}
                    onChange={onInputChange("SET_PHONE")}
                    type="number"
                    name="phone"
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
                  name="request"
                />
                <Payment onInputChange={onInputChange} values={formik.values} />
                <Cancelling>{t("cancelling")}</Cancelling>
                <Button disabled={!!Object.keys(errors).length} type="submit">
                  {t("book appointment")}
                </Button>
              </Forms>
            </Form>
          </FormikProvider>
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
